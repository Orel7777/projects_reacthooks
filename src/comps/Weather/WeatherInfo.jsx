/* eslint-disable react/prop-types */


export default function WeatherInfo(props) {

  let info = props.info;

  return (
    <div className="container text-center mt-3">
      <h2 className="display-4">Weather of city: {info.name}</h2>
      <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="img" />
      <h3>Condition: {info.weather[0].main}</h3>
      <h3>Temp: {info.main.temp} c</h3>
      <h3>Wind : {info.wind.speed}</h3>
    </div>
  )
}


