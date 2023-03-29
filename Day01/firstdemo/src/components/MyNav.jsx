import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./MyNav.css";
export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" className="navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
