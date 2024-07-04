import './Maps2.css'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Maps2() {
  const [ar, setAr] = useState([]);

  const doApi = async () => {
    let url = `http://fs1.co.il/bus/jerusalem.php`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setAr(resp.data);
  };

  useEffect(() => {
    doApi();
  }, []);

  return (
    <div className="container">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
      <MapContainer center={[31.777, 35.235]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {ar.map((item) => {
          return (
            // eslint-disable-next-line no-unused-vars
            <Marker key={item.info} eventHandlers={{ click: (e) => window.open(item.link) }} position={item.pos}>
              <Tooltip>{item.name}</Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}