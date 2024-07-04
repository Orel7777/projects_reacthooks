/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { task_ar } = useContext(TaskContext);
  return (
    <div className="mt-4">
      <h2 className="text-white text-lg-center">List of tasks added:</h2>
      <div className="col-8 mt-3 task">
        {task_ar.map((item) => {
          return (
            <TaskItem key={item.id} item={item} />
          );
        })}
      </div>
    </div>
  );
}
