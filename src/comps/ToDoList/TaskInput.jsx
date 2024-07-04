/* eslint-disable react/prop-types */
import { useRef } from "react"
import { MdAddTask } from "react-icons/md";
import { LiaTasksSolid } from "react-icons/lia";


function TaskInput(props) {

    let nameRef = useRef();
    let timeRef = useRef();


    const onAddOneTask = ()=> {
   
        let toAddTs = {
            name: nameRef.current.value,
            time: timeRef.current.value,
            id:Date.now(),
        }
        props.addTask(toAddTs)
        console.log(toAddTs)
    }

  return (
    <div>
        <div className="d-flex">
        <h2 className="text-light me-3"><LiaTasksSolid /> Task name:</h2>
        <input onKeyDown={(e)=>{if(e.key=="Enter"){onAddOneTask()}}} ref={nameRef} type="text"  className="form-control input"/>
        </div>
        <div className="d-flex my-3">
        <h2 className="text-light me-4"><MdAddTask /> Task time:</h2>
        <input onKeyDown={(e)=>{if(e.key=="Enter"){onAddOneTask()}}} ref={timeRef} type="time" defaultValue={"10:00"} className="form-control input"/>
        </div>
        <div className="text-center my-3">
            <button onClick={onAddOneTask} className="btn btn-warning me-2">Add task</button>
            <button onClick={()=>props.removeAllTask()} className="btn btn-danger">Reset</button>
        </div>
    </div>
  )
}

export default TaskInput