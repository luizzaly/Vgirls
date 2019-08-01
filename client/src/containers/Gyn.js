import React, { Component } from "react";
import axios from "axios";
import GynListItem from "./GynListItem";
import { Link } from "react-router-dom";

export default class Gyn extends Component {
  state = {
    gyns: [],
    search: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  handleClick = gynId => {
    axios
      .put("/api/like", { id: gynId })
      .then(response => {
        let updatedGyns = this.state.gyns.map(el => {
          if (el._id === response.data._id) return response.data;
          else return el;
        });
        this.setState({ gyns: updatedGyns });
      })
      .catch(err => console.log(err));
  };

  getData = () => {
    axios
      .get("/api/gyn")
      .then(response => {
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
      <div className="list-container">
        {/* on 1st render, this.state.gyns is [] */}
        {/* after that, this.state.gyns is populated by the data from the DB */}
        <input
          className="search-bar"
          placeholder="Search Gyn near by"
          type="text"
          value={this.state.search}
          onChange={this.handleSubmit}
        />

        <div className="add-gyn-container">
          <Link className="add-gyn-link" to={`/gyn/add-gyn`}>
            Add your gyn <img className="plus-icon" src="/img/plus.svg" />
          </Link>
        </div>

        {this.state.gyns
          .filter(gyn => {
            return (
              gyn.address
                .toLowerCase()
                .includes(this.state.search.toLowerCase()) && gyn
            );
          })
          .map(gyn => (
            <GynListItem
              gyn={gyn}
              handleClick={this.handleClick}
              user={this.props.user}
            />
          ))}
      </div>
    );
  }
}
