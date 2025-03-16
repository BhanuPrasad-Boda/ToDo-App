import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Dashboard from './components/dashboard';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container container-fluid">
      <h1 className='d-flex justify-content-center ' style={{animationName:'animate',animationDuration:'2s'}}>Todo-App</h1>
     <div className='d-flex justify-content-between'>
      {/* To-Do App */}
      <div className="todo-container">
        <AddTaskForm onAddTask={addTask} />
        
      </div>

      <div>
        {/* Dashboard */}
      <Dashboard tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
     </div>
    </div>
  );
};

export default App;
