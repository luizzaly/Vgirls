import React, { Component } from "react";
import axios from "axios";
import { profile } from "../services/api";
import { Form, Button, Alert } from "react-bootstrap";

export default class Profile extends Component {
  state = {
    username: this.props.user && this.props.user.username,
    password: "",
    email: this.props.user && this.props.user.email
  };

  getData = () => {
    axios
      .get("/profile")
      .then(response => {
        this.setState({
          username: response.data,
          email: response.data,
          password: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.getData();
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { username, password, email } = this.state;

    event.preventDefault();

    profile(username, password, email)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="profile">
        {/* <p>{this.props.user.username}</p> */}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Change your Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Change your Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Change your E-mail:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          {this.state.error && (
            <Alert variant="warning">{this.state.error}</Alert>
          )}

          <Button className="loginbtn" type="submit">
            SAVE
          </Button>
        </Form>
      </div>
    );
  }
}
