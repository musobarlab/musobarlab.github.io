import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
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
            <LinkContainer to="/">
              <Nav.Link>
                <span>Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>
                <span>Blog</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                <span>About</span>
              </Nav.Link>
            </LinkContainer>
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
