/* eslint-disable no-unused-vars */
import {Route,Routes, useSearchParams} from 'react-router-dom'
import VodInput from "./VodInput";
import VodList from "./VodList";
import VodStrip from "./VodStrip";
import Footer from "./Footer";
import { useEffect,useState} from "react";


function AppVodMovies() {

  const [quary]= useSearchParams();
  const [array_vod,setArray_vod] = useState([])

  useEffect(()=>{
    let search = quary.get("s") || "spiderman"
    doApi(search)
  },[quary])

  const doApi = async (_search) => {
    let url = `https://www.omdbapi.com/?s=${_search}&apikey=7b9c2604`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
    setArray_vod(data.Search)
  };

  return (
    <div>
      
      <VodStrip />
      <VodInput />
      <VodList vod_ar={array_vod} />
      <Footer />
      
    </div>
  );
}

export default AppVodMovies;
