import React, { useState } from "react";
import "./ToDoAp.css";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Do workout",
    "do assignment",
  ]);
  const [newTask, setNewTask] = useState();

  function addTask() {
    if (newTask.trim()) {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Empty task cannot be add");
    }
  }
  function deletTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="toDoList">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task...."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
          <ol>
            {tasks.map((tasks, index) => (
              <li key={index}>
                <span className="text">{tasks}</span>
                <div className="yo">
                  <button
                    className="delet-button"
                    onClick={() => deletTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="moveUp-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    up👆
                  </button>
                  <button
                    className="moveDown-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    down👇
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
