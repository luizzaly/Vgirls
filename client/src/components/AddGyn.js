import React, { Component } from "react";
import axios from "axios";

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
      .post("/gyn/add-gyn", {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add your Gyn</h3>
          <label>
            Tell us your favourite OB-GYN:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label>
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
          <button>
            <input type="submit" value="Submit" />
          </button>
        </form>
      </div>
    );
  }
}
