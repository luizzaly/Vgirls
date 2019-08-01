import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Embryology extends Component {
  state = {
    vulva: [],
    embryology: ""
  };

  getData = () => {
    axios
      .get("/api/vulva")
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
      <div className="overview-embryology">
        <div className="info-card">
          <h2>Embryology(how it all starts)</h2>
          <p>{bodypart && bodypart.embryology}</p>
        </div>
        <button className="butn embryology">
          <Link
            class="btn-embryology"
            to={`/vulva/${vulvaPartTitle}/description`}
          >
            To description
          </Link>
        </button>
      </div>
    );
  }
}
