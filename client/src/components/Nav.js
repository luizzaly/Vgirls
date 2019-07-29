import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(this.user);
  });
};

const Nav = props => {
  console.log(props);
  return (
    <div>
      <Navbar className="nav nav-style">
        <Navbar.Brand>
          <Link to="/vulva">Home</Link>
        </Navbar.Brand>
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
      </Navbar>
    </div>
  );
};

export default Nav;
