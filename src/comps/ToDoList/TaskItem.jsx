/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function TaskItem(props) {

  let {name,time,id}= props.item

  return (
    <div className="shadow my-2 p-2 my-3 bg-light rounded-4">
        <button onClick={()=>{
          props.removeSingleTask(id)
        }} className="btn btn-danger float-end">X</button>
        <h4 >{name} : {time}</h4>
    </div>
  )
}

export default TaskItem