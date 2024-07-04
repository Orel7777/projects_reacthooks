import {useContext, useEffect, useState} from 'react';
import {TaskContext} from './Context/TaskContext'

export default function EditPopup() {

  const {hideEditPopup,currentEdit,editTask} = useContext(TaskContext)
  const [inpVal,setInpVal]=useState("");
  useEffect(()=>{
    setInpVal(currentEdit.name)
  },[currentEdit])

  const onSub = (e)=>{
    e.preventDefault()
    editTask(currentEdit.id,{name:inpVal,id:currentEdit.id});
    hideEditPopup();
  }
  return (
    <div className='popup_edit'>
      <div className='inside_popup'>
        <form onSubmit={onSub}>
          <h2>Edit task</h2>
          <label>Name:</label>
          <input value={inpVal} onChange={(e)=>setInpVal(e.currentTarget.value)} type="text"  className='form-control'/>
          <button className='btn btn-success mt-3 me-2'>Update</button>
          <button onClick={()=>{
            hideEditPopup();
          }} type="button" className='btn btn-danger mt-3 '>Cancel</button>
        </form>
      </div>
    </div>
  )
}
