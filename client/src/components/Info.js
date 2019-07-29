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
      <div className="overview white">
        <div className="info-card white">
          <h2>More Infos (all you want to know)</h2>
          <p>{bodypart && bodypart.info}</p>
        </div>
        <button className="butn">
          <Link class="btn-overview" to="/vulva">
            Yeeah you are an expert now!
          </Link>
        </button>
      </div>
    );
  }
}
