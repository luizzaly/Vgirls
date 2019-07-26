import React, { Component } from "react";

export default class Description extends Component {
  state = {
    bodparts: [],
    description: ""
  };
  render() {
    return (
      <div>
        <h2>Description(how it all works)</h2>
        <p>{this.props.location.state.description}</p>
      </div>
    );
  }
}
