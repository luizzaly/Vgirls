import React from "react";
import { Navbar, Nav } from "react-bootstrap";
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
            <Link to="/vulva">Home</Link>
          </Navbar.Brand>
          <Nav className="mr-auto switchsides">
            {props.user ? (
              <>
                <Navbar.Brand className="profile-icon">
                  <Link to="/profile">Profile</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link onClick={() => handleLogout(props)} to="/">
                    Logout
                  </Link>
                </Navbar.Brand>
              </>
            ) : (
              //   <React.Fragment>
              <>
                <Navbar.Brand>
                  <Link to="/auth/signup">Signup</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/auth/login">Login</Link>
                </Navbar.Brand>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
