import { useState, useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
import { toast } from 'react-toastify';
import { SiGoogletasks } from "react-icons/si";

export default function FormTask() {
const { addTask } = useContext(TaskContext);
const [nameInput, setNameInput] = useState("");
const [time, setTime] = useState("");
const errorPopUp = ()=>{
  toast.error("please enter valid name!"),{
    position: "top-center",
    theme: "dark",
  }
}

const onSub = (e) => {
e.preventDefault();
if(nameInput.length > 1){
  console.log(nameInput);
  addTask({ name: nameInput,time:time, id:Date.now()});
  setNameInput("");
  setTime("");
}
else{
  errorPopUp();
}
};

return (
<div>
  <h3 className="text-white text-center text-decoration-underline">
    Form task
  </h3>
  <form onSubmit={onSub} className="col-md-6 mx-auto">
    <div className="d-flex">
      <button className="btn btn-light border border-success p-2 me-3 border-opacity-25 rounded-4 ">
        Add Task  <SiGoogletasks /> 
      </button>
      <input value={nameInput} onInput={(e)=> setNameInput(e.currentTarget.value)}
      type="text"
      className="form-control border border-success p-2 mb-2 border-opacity-25 rounded-4 me-2 p-1"
      />
    </div>
    <div className="d-flex my-2">
      <h2 className="bg-white border me-2 p-1 rounded-4 display-6">
        Time:
      </h2>
      <input value={time} onInput={(e)=> setTime(e.currentTarget.value)} type="time" className="form-control border border-success p-2 mb-2 border-opacity-25 rounded-4 me-2 p-1" />
    </div>
  </form>
</div>
);
}