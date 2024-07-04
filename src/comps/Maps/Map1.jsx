/* eslint-disable no-unused-vars */
import './Maps.css'
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from 'react-leaflet';
import {Icon} from "leaflet"


const myIcon = new Icon({
iconUrl: "/images/icon_pizza.png",
iconSize: [30, 45],
iconAnchor:[15,45],
popupAnchor: [0, -100],
tooltipAnchor: [0,-40]
})

const myIcon2 = new Icon({
iconUrl: "/images/icon_green.png",
iconSize: [30, 45],
iconAnchor:[15,45],
popupAnchor: [0, -100],
tooltipAnchor: [0,-45]
})


export default function Map1() {
return (

<div className="container">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <MapContainer center={[31.777,35.235]} zoom={15} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        <Marker eventHandlers={{
                click: (e) => {
                    alert("The old city of Jerusalem")
                }
            }} position={[31.777,35.235]} icon={myIcon2}>
            <Popup>
                <Link to="https://www.haatika.co.il/">
                The old city of Jerusalem
                </Link>
            </Popup>
            <Tooltip>The old city of Jerusalem</Tooltip>
        </Marker>
        <Marker eventHandlers={{
                click: (e) => {
                    alert("Papa de pizza")
                }
            }} position={[31.776, 35.228]} icon={myIcon}>
            <Popup>
                <Link to="https://www.mishlohim.co.il/menu/12823/">
                Papa de pizza
                </Link>
            </Popup>
            <Tooltip>Papa de pizza</Tooltip>
        </Marker>
    </MapContainer>
</div>
)
}