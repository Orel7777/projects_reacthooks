/* eslint-disable react/prop-types */
import VodItem from "./VodItem"


function VodList(props) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="my-3 text-center display-4" style={{fontWeight:"600"}}>List of movies</h2>
        <div className="row">
          {props.vod_ar.map(item=>{
            return <VodItem key={item.imdID} item={item}/>
          })}
        </div>
      </div>

    </div>
  )
}

export default VodList