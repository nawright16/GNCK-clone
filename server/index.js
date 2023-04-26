// Require the necessary dependencies
const express = require("express");
const app = express();
const cors = require("cors");


// Set up middleware
app.use(cors());             // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json());     // Enable JSON parsing for request bodies
require('dotenv').config();  // Load environment variables from a .env file if it exists

// Define routes for the application

//Welcome message route
app.get("/", (req, res) => {
    res.send("Welcome to our Todo API, where you can procrastinate in style!");
});

//Route to CREATE a new todo

//Route to get READ all todos

//Route to get READ a single todo by ID

//Route to UPDATE a todo by ID

//Route to DELETE a todo by ID

app.listen(process.env.PORT, () => {
    console.log(`Making a todo list on port: ${process.env.PORT} with the ALLSTARS Casey, Nick, Gregg, and Kristen`)
});