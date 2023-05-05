-- This file creates a PostgreSQL database called GNCK and a table called todo.

-- Create the GNCK database.
CREATE DATABASE GNCK;

-- Connect to the GNCK database.
-- \c GNCK;

-- Create the todo table with two columns: todo_id and description.
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,  -- This column will auto-increment and be the primary key.
    description VARCHAR(255)    -- This column will store a description of up to 255 characters.
);

CREATE TABLE completed_todo (
  completed_todo_id SERIAL PRIMARY KEY,  -- This column will auto-increment and be the primary key.
  description VARCHAR(255) NOT NULL,    -- This column will store a description of up to 255 characters and cannot be null.
  completed BOOLEAN NOT NULL DEFAULT false,  -- This column will track the completion status of each task and cannot be null. The default value is set to false.
  todo_id INTEGER REFERENCES todo (todo_id)  -- This column will be used as a foreign key referencing the todo_id column in the todo table.
);



-- Create the completed_todo table with two columns: completed_todo_id, todo_id, and completed_date. The todo_id is set as the foregin key.
