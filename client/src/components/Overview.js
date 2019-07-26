import React, { Component } from "react";
import axios from "axios";

export default class Overview extends Component {
  state = {
    vulva: [],
    title: ""
  };

  getData = () => {
    axios
      .get("/vulva")
      .then(response => {
        this.setState({
          vulva: response.data
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

  render() {
    let bodypart = this.state.vulva.find(part => {
      return part.title === this.props.match.params.title;
    });
    console.log("render");

    return (
      <div className="overview">
        <h2>{bodypart && bodypart.title}</h2>
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
