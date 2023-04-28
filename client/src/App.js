import React, { Fragment } from "react"; //groups list of children without adding extra nodes to the DOM
import './App.css';

//components

import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodos/ListTodos";




function App() {
  return (
    <Fragment>
      <div 
        className="container">
          <InputTodo />
          <ListTodos />
      </div>
      
    </Fragment>
  );
}

export default App;
