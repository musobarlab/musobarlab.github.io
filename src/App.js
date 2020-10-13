import React from 'react';
import {
  Button, 
  Container, 
  Nav,
  Navbar, 
  Form,
  FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MusobarLab</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
