import { useEffect, useState } from 'react'
import {sortBy} from 'lodash'
import './AppToDo.css'
import TaksList from './TaksList'
import TaskInput from './TaskInput'


function AppToDo() {

    let [task_ar,setTaskAr] = useState([]);


    useEffect(()=>{
        if(localStorage["tasks"]){
            setTaskAr(JSON.parse(localStorage["tasks"]))
        }
    },[])

    const addTask = (_item)=>{
        let sort_ar = [...task_ar,_item];
        sort_ar = sortBy(sort_ar,"time")
        // setTaskAr(sort_ar)
        saveLocalStorage(sort_ar)
    }

    const removeAllTask = ()=>{
        // setTaskAr([]);
        saveLocalStorage([])
    }

    const removeSingleTask = (_id) =>{
        let new_ar = task_ar.filter((item)=>item.id !== _id);
        // setTaskAr(new_ar)
        saveLocalStorage(new_ar)
    }

    const saveLocalStorage = (_ar)=>{
        localStorage.setItem("tasks",JSON.stringify(_ar));
        setTaskAr(_ar)
    }
    
  return (
    <div className='bg-primary'>
        <h1 className='text-center fw-bold text-white text-decoration-underline'>Tasks app to perform</h1>
        <div className='col-md-6 mx-auto p-4'>
        <TaskInput removeAllTask={removeAllTask} addTask={addTask} />
        <TaksList removeSingleTask={removeSingleTask} task_ar={task_ar}/>
        </div>
      
    </div>
  )
}

export default AppToDo