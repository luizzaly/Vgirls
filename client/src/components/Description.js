import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Description extends Component {
  state = {
    vulva: [],
    description: ""
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
        <div className="info-card-pink">
          <h2>Description (how it all works)</h2>
          <p class="p-pink">{bodypart && bodypart.description}</p>
        </div>
        <button className="butn description">
          <Link class="btn-description" to={`/vulva/${vulvaPartTitle}/info`}>
            More Info
          </Link>
        </button>
      </div>
    );
  }
}
