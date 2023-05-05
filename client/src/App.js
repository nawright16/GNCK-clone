import React, { Fragment, useState } from "react"; //groups list of children without adding extra nodes to the DOM
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'




//components

import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodos/ListTodos";
import Sidebar from "./components/Sidebar/Sidebar";
import About from './components/About/About'



function App() {
  const [isCompletedTodoUpdated, setIsCompletedTodoUpdated] = useState(false);

  const handleCompletedTodo = () => {
    setIsCompletedTodoUpdated(!isCompletedTodoUpdated);
  };

  return (

    <div className="App">

      <Router>
        <header>
          <Container>
            <Nav className="justify-content-space-between" defaultActiveKey="/" variant="tabs">
              <Nav.Item >
                <Nav.Link href="/">
                  <Link to="/">GNCK</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link eventKey={"aboutPage"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className="display">
          <Routes>

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

      <body>

        <Fragment>
          <div className="container">
            <InputTodo />
            <ListTodos onTodoCompleted={handleCompletedTodo} />
            <Sidebar
              isCompletedTodoUpdated={isCompletedTodoUpdated}
              handleCompletedTodo={handleCompletedTodo} // Pass the function here
            />

          </div>
        </Fragment>
      
      </body>

    </div>
  );
}


export default App;
