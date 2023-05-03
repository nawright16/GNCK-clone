
import React, { Fragment } from "react"; //groups list of children without adding extra nodes to the DOM
import './App.css';

//components

import React, { Fragment, useState } from "react"; //groups list of children without adding extra nodes to the DOM
import './App.css';


//components

import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodos/ListTodos";
import CompletedList from "./components/CompletedList/CompletedList";




function App() {
  const [isCompletedTodoUpdated, setIsCompletedTodoUpdated] = useState(false);

  const handleCompletedTodo = () => {
    setIsCompletedTodoUpdated(!isCompletedTodoUpdated);
  };

  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos onTodoCompleted={handleCompletedTodo} />
        <CompletedList isCompletedTodoUpdated={isCompletedTodoUpdated} />
      </div>
    </Fragment>
  );
}

export default App;