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
import { motion } from "framer-motion"

import './App.css';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.5 }}>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      </motion.div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="//linkedin.com/in/thomasabd" target="_blank" rel="noopener noreferrer">Linkedin</Nav.Link>
          <Nav.Link href="//github.com/VirThomas" target="_blank" rel="noopener noreferrer">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
