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