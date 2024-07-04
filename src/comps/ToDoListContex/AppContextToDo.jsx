import FormTask from "./FormTask";
import TaskList from "./TaskList";
import { TaskContextProvider } from "./Context/TaskContext";
import EditPopup from "./EditPopup";
import { useContext } from 'react';
import { TaskContext } from './Context/TaskContext';
import "./AppContextToDo.css";

export default function AppContextToDo() {
  return (
    <TaskContextProvider>
      <Content />
    </TaskContextProvider>
  );
}

function Content() {
  const { showEdit } = useContext(TaskContext);

  return (
    <>
      {showEdit && <EditPopup />}
      <div className="container bg-dark">
        <article id="article">
          <h1 className="text-center text-white">To Do List</h1>
          <FormTask />
          <TaskList />
        </article>
      </div>
    </>
  );
}
