// Require the necessary dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js"); // Import the database connection pool from db.js

// Set up middleware
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Enable JSON parsing for request bodies
require("dotenv").config(); // Load environment variables from a .env file if it exists

// Define routes for the application

//Welcome message route
app.get("/", (req, res) => {
  res.send("Welcome to our Todo API, where you can procrastinate in style!");
});

//Route to CREATE a new todo
//To test in POSTMAN: POST http://localhost:5001/todos/ (in the body raw JSON: { "description": "Create a TODO API" } 
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body; // Extract the 'description' field from the request body
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    ); // Insert a new row into the 'todo' table with the provided description and return the new row

    res.json(newTodo.rows[0]); // Return the new row in JSON format
    console.log(req.body); // Log the request body to the console
  } catch (err) {
    console.error(err.message); // If there's an error, log it to the console
  }
});

//Route to get READ all todos
//To test in POSTMAN: GET http://localhost:5001/todos/ if your table is empty, you will get an empty array
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo"); // Select all rows from the 'todo' table
    res.json(allTodos.rows); // Return the rows in JSON format
  } catch (err) {
    console.error(err.message); // If there's an error, log it to the console
  }
});

//Route to get READ a single todo by ID
//To test in POSTMAN: GET http://localhost:5001/todos/2 (in this case, 2 was the todo_id number I was getting)
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the 'id' parameter from the request URL
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]); // Select the row with the matching ID from the 'todo' table

    res.json(todo.rows[0]); // Return the row in JSON format
  } catch (err) {
    console.error(err.message); // If there's an error, log it to the console
  }
});

//Route to UPDATE a todo by ID
//To test in POSTMAN: PUT {"description": "Clean Car"} http://localhost:5001/todos/2 (in this case, 2 was the todo_id number I was updating)
// The reason why the route name is "todos" instead of "todo" is that it follows a common RESTful convention of using plural nouns for endpoints that deal with collections or lists of items.
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the 'id' parameter from the request URL
    const { description } = req.body; // Extract the 'description' field from the request body
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    ); // Update the row with the matching ID in the 'todo' table

    res.json("Todo was updated!"); // Return a success message in JSON format
  } catch (err) {
    console.error(err.message); // If there's an error, log it to the console
  }
});

//Route to DELETE a todo by ID
//To test in POSTMAN: DELETE http://localhost:5001/todos/2 (in this case, 2 was the todo_id number I was deleting)
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // get the todo id from the request parameters
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]); // delete the todo from the database with the given id

    res.json("Todo was deleted!"); // return a success message
  } catch (err) {
    console.log(err.message); // log any errors to the console
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Making a todo list on port: ${process.env.PORT} with the ALLSTARS Casey, Nick, Gregg, and Kristen`
  );
});
