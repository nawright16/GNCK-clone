import React, { useState, useEffect } from "react";

const CompletedList = ({ isCompletedTodoUpdated }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/completed_todos")
      .then((response) => response.json())
      .then((data) => setCompletedTasks(data));
  }, [isCompletedTodoUpdated]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/completed_todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the completed todo with the specified ID from the completedTasks array
        setCompletedTasks(
          completedTasks.filter((task) => task.completed_todo_id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task.description}
            <button onClick={() => handleDelete(task.completed_todo_id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
