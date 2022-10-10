import React, { useState } from "react";
import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTask(title);
    setTitle('');
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="header logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="add a new task"
          value={title}
          type="text"
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
