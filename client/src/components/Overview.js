import React, { Component } from "react";

export default class Overview extends Component {
  state = {
    bodparts: [],
    title: ""
  };
  render() {
    return (
      <div>
        {this.props.location.state.title}
        fghjkl;';lkjhgf'
        <p>Ethynology (how it all starts)</p>
        <p>Description (how it all works)</p>
        <p>More Info (all you need to know)</p>
      </div>
    );
  }
}
