import React, { Fragment, useState } from "react";

const InputTodo = () => {
  // Declare a state variable 'description' and initialize it to an empty string
  const [description, setDescription] = useState("");

  // Define a function to be called when the form is submitted
  const onSubmitForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior, allows the todo list to be updated without the page being reloaded.

    try {
      // Create an object 'body' with the description of the todo item
      const body = { description };
      console.log("body:", body);

      // Send a POST request to the server to create a new todo item
      const response = await fetch("http://localhost:5001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Redirect to the home page after the request has been sent successfully
      window.location = "/";
    } catch (err) {
      // Log the error message to the console if an error occurs
      console.error(err.message);
    }
  };

  // Render a form with an input field and a button
  return (
    <Fragment>
      <h1 className="text-center mt-5">GNCK Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
