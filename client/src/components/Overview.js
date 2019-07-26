import React, { Component } from "react";

export default class Overview extends Component {
  state = {
    bodparts: [],
    title: ""
  };
  render() {
    return (
      <div className="overview">
        <h2>{this.props.location.state.title}</h2>
        <div className="info-card">
          <p>Embryology(how it all starts)</p>
          <p>Description (how it all works)</p>
          <p>More Info (all you need to know)</p>
        </div>
        <button className="butn">LEARN MORE</button>
      </div>
    );
  }
}
