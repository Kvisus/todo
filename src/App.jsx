import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const LOCAL_STORAGE_KEY = "todo:savedtasks";

  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    // console.log(saved);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const addTask = (title) => {
    setTasksAndSave([
      ...tasks,
      { id: crypto.randomUUID(), title: title, isCompleted: false },
    ]);
  };

  const toggleTaskCompletedById = (taskID) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  );
};

export default App;
