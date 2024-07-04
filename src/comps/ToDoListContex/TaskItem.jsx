/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useContext} from 'react'
import {TaskContext} from './Context/TaskContext'

export default function TaskItem(props) {

  const {item}= props;
  const {removeTask,showEditPopup} = useContext(TaskContext)

  return (
    <div className="text-white bg-danger border border-white rounded-4 p-2 my-2 shadow-shadow-sm display-6 overflow-hidden" key={item.id}>
     {item.name}-{item.time}
     <button className="btn btn-success float-end" onClick={()=>{
      removeTask(item.id)
     }} >X</button>
     <button className="btn btn-info float-end me-2" onClick={()=>{
      showEditPopup(item);
     }}>E</button>
    </div>
  );
}