import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.svg';
import Home from './pages/home/home'
import Aboutme from './pages/aboutme/aboutme'
import { motion } from "framer-motion"

import './App.css';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
      </motion.div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to="/about">About me</Nav.Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to="/about">Linkedin</Nav.Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to="/link">Github</Nav.Link>
          </motion.div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path="/about">
        <Aboutme />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
