import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navi = props => {
  console.log(props);
  return (
    <div>
      <Navbar className="nav nav-style" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand>
            <Link to="/vulva">Discover your body</Link>
          </Navbar.Brand>
          <Nav className="mr-auto switchsides">
            <NavDropdown title="More" id="basic-nav-dropdown">
              {props.user ? (
                <>
                  <NavDropdown.Item>
                    <Link to="/profile">Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link onClick={() => handleLogout(props)} to="/">
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </>
              ) : (
                //   <React.Fragment>
                <>
                  <NavDropdown.Item>
                    <Link to="/auth/signup">Signup</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/auth/login">Login</Link>
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
