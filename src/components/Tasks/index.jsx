import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task";

const Tasks = ({ tasks, onComplete, onDelete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className="">
          <p className="">Create tasks</p>
          <span className="">{tasksQuantity}</span>
        </div>
        <div className="">
          <p className={styles.textPurple}>Completed Tasks</p>
          <span className="">
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}></div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

export default Tasks;
