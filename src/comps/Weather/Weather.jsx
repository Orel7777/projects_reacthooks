import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {useSearchParams} from 'react-router-dom'
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";


export default function Weather() {
  let [info,setInfo] = useState({})
  const [quary]= useSearchParams();
  useEffect(()=>{
    doApi(quary.get("q"));
  },[quary])

  const doApi =async (_city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_city}&APPID=3719e650909a0bfb3199475a94a11c64&units=metric`
    let resp = await axios.get(url)
    console.log(resp.data)
    setInfo(resp.data)
  }

  return (
    <div>
        <WeatherForm doApi={doApi}/>
        {info.name && <WeatherInfo info={info}/>}
    </div>
  )
}
