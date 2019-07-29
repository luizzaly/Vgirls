import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const vulvaPartTitle = this.props.match.params.title;
    console.log(this.props.match.params.title);
    let bodypart = this.state.vulva.find(part => {
      return part.title === vulvaPartTitle;
    });
    console.log("render");

    return (
      <div className="overview">
        <div className="info-card">
          <h2>{vulvaPartTitle}</h2>
          <p>Embryology(how it all starts)</p>
          <p>Description (how it all works)</p>
          <p>More Info (all you need to know)</p>
        </div>
        <button className="butn">
          <Link to={`/vulva/${vulvaPartTitle}/embryology`}>LEARN MORE</Link>
        </button>
      </div>
    );
  }
}
