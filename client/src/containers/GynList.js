import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GynList extends Component {
  state = {
    filteredDoctors: [],
    search: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
    let filteredDoctors = this.props.gyns.filter(gyn => {
      console.log(gyn);
      return (
        gyn.address.toLowerCase().includes(event.target.value.toLowerCase()) &&
        gyn
      );
    });
    this.setState({ filteredDoctors });
  };

  componentDidMount() {
    this.setState({ filteredDoctors: this.props.gyns });
  }

  render() {
    return (
      <div>
        {this.state.filteredDoctors.map(gyn => {
          return (
            <div key={gyn._id}>
              <ul>
                <h3>{gyn.name}</h3>
                <h3>{gyn.address}</h3>
                <h3>{gyn.phoneNumber}</h3>
              </ul>
            </div>
          );
        })}
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleSubmit}
        />
      </div>
    );
  }
}
