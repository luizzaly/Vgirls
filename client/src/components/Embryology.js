import React, { Component } from "react";

export default class Embryology extends Component {
  state = {
    bodparts: [],
    embryology: ""
  };
  render() {
    return (
      <div className="embryology">
        <h2>Embryology(how it all starts)</h2>
        <p>{this.props.location.state.embryology}</p>
      </div>
    );
  }
}
