import React, { Fragment, useState } from "react"; //groups list of children without adding extra nodes to the DOM
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './App.css';

//components
import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodos/ListTodos";
import CompletedList from "./components/CompletedList/CompletedList";
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
            <Nav defaultActiveKey="/" variant="tabs">
              <Nav.Item>
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
            {/* <Route path="/" element={<ListTodos />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      
      <body>
        <Fragment>
          <div className="container">
            <InputTodo />
            <ListTodos onTodoCompleted={handleCompletedTodo} />
            <CompletedList isCompletedTodoUpdated={isCompletedTodoUpdated} />
          </div>
        </Fragment>
      </body>

    </div>
  );
}

export default App;