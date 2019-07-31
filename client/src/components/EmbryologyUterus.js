import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class EmbryologyUterus extends Component {
  state = {
    uterus: [],
    embryology: ""
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
    console.log("#######", uterusPartTitle);

    return (
      <div className="overview-embryology">
        <div className="info-card">
          <h2>Embryology(how it all starts)</h2>
          <p>{bodypart && bodypart.embryology}</p>
        </div>
        <button className="butn embryology">
          <Link
            class="btn-embryology"
            to={`/uterus/${uterusPartTitle}/description`}
          >
            TO DESCRIPTION
          </Link>
        </button>
      </div>
    );
  }
}
