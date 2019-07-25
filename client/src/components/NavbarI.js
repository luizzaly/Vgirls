import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
const NavbarI = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navbar;
