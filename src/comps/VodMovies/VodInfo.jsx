/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VodInfo() {
const params = useParams();
const [item, setItem] = useState({});
let navigate = useNavigate();
const onBackPage = () => {
navigate(-1);
};

useEffect(() => {
doApi();
}, []);

const doApi = async () => {
let url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=7b9c2604`;
let resp = await fetch(url);
let data = await resp.json();
console.log(data);
setItem(data);
};
return (
<div className="container p-2 text-center bg-dark">
  <div className="display-6 text-white" style={{ fontWeight: "800" }}>
    Movie: {item.Title}
  </div>
  <img src={item.Poster} className="col-md-3" alt="pic" />
  <div className="display-6 text-warning">
    Movie runtime :{item.Runtime}
  </div>
  <div className="display-6 text-warning">
    Movie rating: {item.imdbRating}
  </div>
  <div className="display-6 text-warning">Movie genere: {item.Genre}</div>
  <div className="display-6 text-warning col-md-5 mx-auto">
    Movie plot:{item.Plot}
  </div>
  <button onClick={onBackPage} className="btn btn-warning mt-3 text-white">
    Back to list
  </button>
</div>
);
}

export default VodInfo;