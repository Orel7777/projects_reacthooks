import { useRef } from "react"
import {useNavigate} from 'react-router-dom'


export default function WeatherForm() {
const navigate = useNavigate();
const inputRef = useRef();

const onSearchClick = ()=>{
  navigate("/weather?q="+inputRef.current.value)
}

return (
<div className="container-fluid bg-info p-2">
  <div className="container">
    <div className="logo col-auto text-bg-info">
      <h3 className="text-light text-center">App weather</h3>
    </div>
    <div className="d-flex justify-content-center col-md-4 mx-auto ">
      <input onKeyDown={(e)=>{
        if(e.key == "Enter"){onSearchClick()}
      }} ref={inputRef} className="form-control me-2" id="id_input" type="search" placeholder="Search weather conditions " />
      <button onClick={onSearchClick} className="btn btn-danger">Search</button>
    </div>
  </div>
</div>
)
}