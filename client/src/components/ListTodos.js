import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import Checkbox from "./Checkbox";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      // Send DELETE request to server to delete a specific todo with the given id
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });

      // Update the state by removing the deleted todo
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get todos from server
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5001/todos");
      const jsonData = await response.json();

      console.log(jsonData);

      // Update the state with the retrieved todos
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Call getTodos() only once when the component mounts
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {/* Render a row for each todo */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>
                <Checkbox todo={todo} />
              </td>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                {/* Call deleteTodo() when the Delete button is clicked */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
