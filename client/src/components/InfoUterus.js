import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class InfoUterus extends Component {
  state = {
    uterus: [],
    info: ""
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
    console.log("////", this.props.match.params.title, this.state.uterus);
    const uterusPartTitle = this.props.match.params.title;
    let bodypart = this.state.uterus.find(part => {
      return part.title === uterusPartTitle;
    });
    console.log("render");

    return (
      <div className="overview white">
        <div className="info-card white">
          <h2>More Infos (all you want to know)</h2>
          <p>{bodypart && bodypart.info}</p>
        </div>
        <button className="butn embryology">
          <Link class="btn-overview" to="/GifUterus">
            Yeeah you are an expert now!
          </Link>
        </button>
      </div>
    );
  }
}
