import React from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AppNavbar(){
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Civillink</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            <Nav.Link as={Link} to="/professionals">Professionals</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <Form.Control type="search" placeholder="Search contractors, architects..." className="me-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
