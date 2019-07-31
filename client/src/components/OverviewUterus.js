import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class OverviewUterus extends Component {
  state = {
    uterus: [],
    title: ""
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
    const uterusPartTitle = this.props.match.params.title;
    console.log(this.props.match.params.title);
    let bodypart = this.state.uterus.find(part => {
      return part.title === uterusPartTitle;
    });
    console.log("render");

    return (
      <div className="overview">
        <div className="info-card">
          <h2>{uterusPartTitle}</h2>
          <p>Embryology(how it all starts)</p>
          <p>Description (how it all works)</p>
          <p>More Info (all you need to know)</p>
        </div>
        <button className="butn">
          <Link
            class="btn-overview"
            to={`/uterus/${uterusPartTitle}/embryology`}
          >
            LEARN MORE
          </Link>
        </button>
      </div>
    );
  }
}
