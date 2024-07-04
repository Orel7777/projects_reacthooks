/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'

function VodItem(props) {

  let item = props.item
  const navigate = useNavigate();
  const onInfo = ()=>{
    navigate(`/vodMovies/info/${item.imdbID}`)
  }
  return (
    <div className="col-md-4 p-3">
      <div className="border p-2 h-100 overflow-hidden">
      <img src={item.Poster} alt="" className="float-start me-2 w-25" />   
      <h4>{item.Title}</h4>
      <div>Year:{item.Year}</div>
      <button onClick={onInfo} className="btn btn-success">More info</button>
      </div>
    </div>
  )
}

export default VodItem