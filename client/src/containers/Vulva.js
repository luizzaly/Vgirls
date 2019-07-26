import axios from "axios";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Vulva extends Component {
  state = {
    vulva: [],
    selected: ""
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
    this.getData();
  }
  handleclick = () => {
    this.setState({ selected: "Clitoris" }, () => {
      console.log(this.state.vulva[1]._id);
      this.props.history.push({
        pathname: `vulva/${this.state.vulva[1].title}`,
        state: { title: this.state.vulva[1].title }
      });
    });
  };

  render() {
    let bodypart = this.state.vulva.find(part => {
      return part.title === this.state.selected;
    });
    console.log(bodypart);

    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        (
        <img
          onClick={this.handleclick}
          src="/img/Mumu.svg"
          alt="Vulva orange"
        />
        <div
          className="image-container"
          style={{ width: "100vw", position: "relative" }}
        >
          <Link to="/outer">
            <img
              src="/img/Asset3.png"
              alt=""
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Link>
          <Link to="/inner">
            <img
              src="/img/Asset4.png"
              alt=""
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Link>
        </div>
        )
      </div>
    );
  }
}
