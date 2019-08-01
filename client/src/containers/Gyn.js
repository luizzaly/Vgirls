import React, { Component } from "react";
import axios from "axios";
import GynList from "./GynList";

export default class Gyn extends Component {
  state = {
    gyns: [],
    search: ""
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
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        {this.state.gyns.length > 0 && <GynList gyns={this.state.gyns} />}
      </div>
    );
  }
}
