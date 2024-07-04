/* eslint-disable react/prop-types */
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function MapSearch() {
  const searchProvider = new OpenStreetMapProvider();
  const inputRef = useRef();
  const [position, setPosition] = useState([25.856217484421784, -80.23794890815435]);

  const onSearchClick = () => {
    doSearchAddress();
  };

  const doSearchAddress = async () => {
    let input_val = inputRef.current.value;
    let results = await searchProvider.search({ query: input_val });
    console.log(results);
    setPosition([results[0].y, results[0].x]);
  };

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div className="header my-2">
        <h3 className="text-center">Address search</h3>
        <div className="col-md-4 mx-auto d-flex input">
          <input onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                doSearchAddress();
            }
          }} ref={inputRef} type="search" className="form-control me-2" />
          <button onClick={onSearchClick} className="btn btn-danger" style={{ width: "145px" }} >
            Search info
          </button>
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchMarkerPlace position={position} />
      </MapContainer>
    </div>
  );
}

const SearchMarkerPlace = (props) => {
  const map = useMap();
  map.flyTo(props.position);
  return (
    <Marker position={props.position}>
      <Popup>the place</Popup>
    </Marker>
  );
};
