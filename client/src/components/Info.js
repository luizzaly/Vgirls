import React, { Component } from "react";

export default class Description extends Component {
  state = {
    bodparts: [],
    info: ""
  };
  render() {
    return (
      <div>
        <h2>Info(how it all works)</h2>
        <p>{this.props.location.state.info}</p>
      </div>
    );
  }
}
