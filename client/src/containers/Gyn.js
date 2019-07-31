import React, { Component } from "react";
import axios from "axios";
import GynList from "./GynList";

export default class Gyn extends Component {
  state = {
    gyns: []
  };

  getData = () => {
    axios
      .get("/gyn")
      .then(response => {
        console.log(response.data);
        this.setState({
          gyns: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}

        <GynList gyns={this.state.gyns} />
      </div>
    );
  }
}
