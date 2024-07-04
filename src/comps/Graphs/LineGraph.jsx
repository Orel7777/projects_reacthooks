import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
import axios from "axios";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LineGraph() {
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
        let url = "https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/day/2024-01-01/2024-03-31?adjusted=true&sort=asc&apiKey=sRGl1coZhSytbNjwd9ZRoZ5e4ajs1fLb";
        let resp = await axios.get(url);
        console.log(resp.data.results);
        let temp_ar = resp.data.results.map(item => {
            return {
                x: new Date(item.t),
                y: item.c
            };
        });
        console.log(temp_ar);
        setAr(temp_ar);
    };

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Stock Price of Tesla (January - March 2024)"
        },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Closing Price (in USD)",
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function (e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [
            {
                type: "area",
                xValueFormatString: "DD MMM",
                yValueFormatString: "$##0.00",
                dataPoints: ar
            }
        ]
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="container">
            <h2 className="text-white">Graph of Tesla stock</h2>
            <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
                /* containerProps={{ width: '100%', height: '300px' }} */
            />
        </div>
    );
}
