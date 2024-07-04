/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useLayoutEffect, useState } from "react";

export const TaskContext = createContext({
  task_ar: [{ name: "", time: "", id: 1 }],
  currentEdit:[{ name: "", time: "", id: 1 }],
  addTask: (item) => {},
  removeTask: (id) => {},
  showEdit: false,
  showEditPopup: () => {},
  hideEditPopup: () => {},
  editTask:(id,item)=>{}
});

export function TaskContextProvider({ children }) {
  const [task_ar, setTaskAr] = useState([
    { name: "Go to sleep", time: "23:00", id: 1 },
    { name: "Go to work", time: "8:00", id: 2 }
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [currentEdit,setCurrentEdit] = useState({name:"",time:"",id:0})


  useLayoutEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTaskAr(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);
  const addTask = (item) => {
    setTaskAr((ar) => saveLocal([...ar, item]));
  };

  const removeTask = (id) => {
    setTaskAr((ar) => saveLocal(ar.filter((item) => item.id != id)));
  };

  const editTask = (id, newItem) => {
    const taskIndex = task_ar.findIndex((item) => item.id == id);
    const update_ar = [...task_ar];
    if (taskIndex !== -1) {
      update_ar[taskIndex] = newItem;
      setTaskAr(saveLocal(update_ar));
    }
  };
  
  const saveLocal = (newTaskAr) => {
    localStorage.setItem("tasks", JSON.stringify(newTaskAr));
    return newTaskAr;
  };
  const showEditPopup = (item) => {
    setCurrentEdit(item);
    setShowEdit(true);
  };

  const hideEditPopup = () => {
    setShowEdit(false);
  };
  const val = {
    showEdit,
    currentEdit,
    showEditPopup,
    hideEditPopup,
    task_ar,
    addTask,
    removeTask,
    editTask,
  };
  return <TaskContext.Provider value={val}>{children}</TaskContext.Provider>;
}
