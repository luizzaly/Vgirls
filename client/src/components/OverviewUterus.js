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
      .get("/api/uterus")
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
          <h2 className="info-card-blue">{uterusPartTitle}</h2>
          <p className="info-card-blue-p">Embryology(how it all starts)</p>
          <p className="info-card-blue-p">Description (how it all works)</p>
          <p className="info-card-blue-p">More Info (all you need to know)</p>
        </div>
        <button className="butn pink">
          <Link class="btn-pink" to={`/uterus/${uterusPartTitle}/embryology`}>
            Learn more
          </Link>
        </button>
      </div>
    );
  }
}
