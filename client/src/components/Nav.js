import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="/auth/login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
