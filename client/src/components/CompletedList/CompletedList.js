import React, { useState, useEffect } from "react";

const CompletedList = ({ isCompletedTodoUpdated }) => {
  // Declare a state variable 'completedTasks' and initialize it as an empty array
  const [completedTasks, setCompletedTasks] = useState([]);

  // Use the useEffect hook to fetch the list of completed todos from the server and update the state when isCompletedTodoUpdated changes
  useEffect(() => {
    fetch("http://localhost:5001/completed_todos")
      .then((response) => response.json()) // Parse the response body as JSON
      .then((data) => setCompletedTasks(data)); // Update the 'completedTasks' state with the fetched data
  }, [isCompletedTodoUpdated]);

  // Render a list of completed tasks
  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {/* Map over the 'completedTasks' array and render a list item for each completed task */}
        {completedTasks.map((task, index) => (
          <li key={index}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;

