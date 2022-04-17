import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">The Kestner Blog</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="projects">Projects</Nav.Link>
        <NavDropdown title="Blog" id="basic-nav-dropdown">
          <NavDropdown.Item href="blog">Weeks 1-4</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Container>
  </Navbar>
  <Outlet />
    </div>
  );
}
