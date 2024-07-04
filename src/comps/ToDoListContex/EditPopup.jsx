import { useContext, useEffect, useState } from 'react';
import { TaskContext } from './Context/TaskContext';

export default function EditPopup() {

  const { hideEditPopup, currentEdit, editTask } = useContext(TaskContext);
  const [nameVal, setNameVal] = useState("");
  const [timeVal, setTimeVal] = useState("");

  useEffect(() => {
    setNameVal(currentEdit.name);
    setTimeVal(currentEdit.time);
  }, [currentEdit]);

  const onSub = (e) => {
    e.preventDefault();
    editTask(currentEdit.id, { name: nameVal, time: timeVal, id: currentEdit.id });
    hideEditPopup();
  };

  return (
    <div className='popup_edit'>
      <div className='inside_popup'>
        <form onSubmit={onSub}>
          <h2>Edit task</h2>
          <label>Name:</label>
          <input value={nameVal} onChange={(e) => setNameVal(e.currentTarget.value)} type="text" className='form-control' />
          <label>Time:</label>
          <input value={timeVal} onChange={(e) => setTimeVal(e.currentTarget.value)} type="time" className='form-control' />
          <button className='btn btn-success mt-3 me-2'>Update</button>
          <button onClick={() => {
            hideEditPopup();
          }} type="button" className='btn btn-danger mt-3 '>Cancel</button>
        </form>
      </div>
    </div>
  );
}
