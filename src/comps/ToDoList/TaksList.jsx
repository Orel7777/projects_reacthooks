/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem"


function TaksList(props) {
  return (
    <div>
        <h2 className="text-center text-bg-dark border border-danger rounded-4">Task added:</h2>
        {props.task_ar.map(item=>{
          return(
            <TaskItem removeSingleTask={props.removeSingleTask} key={item.id} item={item}/>
          )
        })}
    </div>
  )
}

export default TaksList