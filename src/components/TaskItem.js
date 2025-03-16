import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li className='m-2 fst-italic' style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button className='btn btn-outline-success m-2' onClick={() => onToggleComplete(task.id)}>✔</button>
      <button className='btn btn-outline-danger m-2' onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
};

export default TaskItem;
