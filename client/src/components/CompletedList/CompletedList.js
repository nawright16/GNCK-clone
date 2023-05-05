import React, { useState, useEffect } from "react";
import './CompletedList.css';
import { BsXCircleFill } from 'react-icons/bs';

const CompletedList = ({ isCompletedTodoUpdated }) => {
  // Initialize state for completed tasks
  const [completedTasks, setCompletedTasks] = useState([]);

  // Fetch completed tasks from the API when the component mounts or when a new completed todo is added
  useEffect(() => {
    fetch("http://localhost:5001/completed_todos")
      .then((response) => response.json())
      .then((data) => setCompletedTasks(data));
  }, [isCompletedTodoUpdated]);

  // Handle the deletion of a completed task by sending a DELETE request to the API
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

  // Render the list of completed tasks and provide a delete button for each one
  return (
    <div className="completed">
      <h3>Completed Tasks</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task.description}
            <button onClick={() => handleDelete(task.completed_todo_id)}>
              <BsXCircleFill />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
