import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Todo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
