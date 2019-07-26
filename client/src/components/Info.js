import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Embryology extends Component {
  state = {
    vulva: [],
    info: ""
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
    console.log("////", this.props.match.params.title, this.state.vulva);
    const vulvaPartTitle = this.props.match.params.title;
    let bodypart = this.state.vulva.find(part => {
      return part.title === vulvaPartTitle;
    });
    console.log("render");

    return (
      <div className="embryology">
        <h2>Description (how it all works)</h2>
        <p>{bodypart && bodypart.info}</p>
        <button className="butn">
          <Link to="/vulva">Yeeah you are an expert now!</Link>
        </button>
      </div>
    );
  }
}
