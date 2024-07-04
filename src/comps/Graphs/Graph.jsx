/* eslint-disable react-hooks/exhaustive-deps */
import CanvasJSReact from '@canvasjs/react-charts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Graph() {
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await doApi();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const doApi = async () => {
    const url = 'https://monkeys.co.il/api2/covid19.php';
    const resp = await axios.get(url);
    const countries_ar = ["Italy", "UK", "France", "Cuba", "Brazil"];
    const temp_ar = resp.data.filter(item => countries_ar.includes(item.country));
    const graph_ar = temp_ar.map(item => ({
      label: item.country,
      y: item.testsPerOneMillion
    }));
    setAr(graph_ar);
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",
    title: {
      text: "Graph of countries"
    },
    axisY: {
      includeZero: false,
      title: "Number of corona tests"
    },
    axisX: {
      includeZero: true,
      title: "The name of country"
    },
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: ar
    }]
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className='text-white'>Graph of corona tests</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}
