import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DescriptionUterus extends Component {
  state = {
    uterus: [],
    description: ""
  };

  getData = () => {
    axios
      .get("/uterus")
      .then(response => {
        this.setState({
          uterus: response.data
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
    console.log("////", this.props.match.params.title, this.state.uterus);
    const uterusPartTitle = this.props.match.params.title;
    let bodypart = this.state.uterus.find(part => {
      return part.title === uterusPartTitle;
    });
    console.log("render");

    return (
      <div className="overview-embryology">
        <div className="info-card-pink">
          <h2>Description (how it all works)</h2>
          <p class="p-pink">{bodypart && bodypart.description}</p>
        </div>
        <button className="butn description">
          <Link class="btn-description" to={`/uterus/${uterusPartTitle}/info`}>
            More Info
          </Link>
        </button>
      </div>
    );
  }
}
