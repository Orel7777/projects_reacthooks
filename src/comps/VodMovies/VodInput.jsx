import {useRef} from 'react'
import {useNavigate} from "react-router-dom"

function VodInput() {

  const inputRef = useRef();
  const navigate = useNavigate();
  const onSearch = ()=>{
    let inputVal = inputRef.current.value;
    navigate(`/vodMovies?s=${inputVal}`)
  }
  return (
    <header className="container-fluid bg-danger p-2">
        <div className="container">
          <div className="row">
            <div className="logo col-auto">
              <h3 className="text-white">V.O.D Search</h3>
            </div>
            <nav className="d-flex col-md-4">
              <input onKeyDown={(e)=>{if(e.key=="Enter"){onSearch()}}} ref={inputRef}  type="search" placeholder="V.O.D Search" className="form-control me-2" />
              <button onClick={onSearch} className="btn btn-dark">Search</button>
            </nav>
          </div>
        </div>
    </header>
  )
}

export default VodInput