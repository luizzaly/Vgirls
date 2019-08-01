import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

export default class AddGyn extends Component {
  state = {
    name: "",
    address: "",
    phoneNumber: ""
  };
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    const { name, address, phoneNumber } = this.state;
    event.preventDefault();

    axios
      .post("/api/gyn/add-gyn", {
        name,
        address,
        phoneNumber
      })
      .then(response => {
        this.props.history.push("/gyn");
      });
  };

  render() {
    return (
      <div className="down">
        <form className="profile add-gyn-profile" onSubmit={this.handleSubmit}>
          <h2 className="profile-welcome">Add your Gyn</h2>
          <label>
            Tell us your favourite OB-GYN:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label className="adress-flex">
            Tell us the address:
            <textarea
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
            />
          </label>

          <label>
            Tell us the phone number:
            <input
              type="text"
              value={this.state.phoneNumber}
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </label>
          <Button className="butn add-gyn" type="submit">
            Save
          </Button>
        </form>
      </div>
    );
  }
}
