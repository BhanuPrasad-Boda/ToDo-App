import React from 'react';

const Dashboard = ({ tasks, setFilteredTasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const filterTasks = (filter) => {
    if (filter === "completed") {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else if (filter === "pending") {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    } else {
      setFilteredTasks(tasks);
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>

      <div>
        <button className='btn btn-primary m-2' onClick={() => filterTasks("all")}>All</button>
        <button className='btn btn-primary m-2' onClick={() => filterTasks("completed")}>Completed</button>
        <button className='btn btn-primary m-2' onClick={() => filterTasks("pending")}>Pending</button>
      </div>
    </div>
  );
};

export default Dashboard;
