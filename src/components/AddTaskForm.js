import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
      <input className='form-control'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit" className='btn btn-warning'>Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
