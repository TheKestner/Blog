import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">The Kestner Blog</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="about"eventKey="/about">About</Nav.Link>
        <Nav.Link href="blog" eventKey="/blog">Blog</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
      </Container>
  </Navbar>
  <Outlet />
    </div>
  );
}
