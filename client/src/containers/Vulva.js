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
<<<<<<< HEAD
    // let bodypart = this.state.vulva.find(part => {
    //   return part.title === this.state.selected;
    // });
=======
    let bodypart = this.state.vulva.find(part => {
      return part.title === this.state.selected;
    });
    console.log(bodypart);
>>>>>>> f02824db445e32b991e01417bce6872655c5148d

    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}

        <div
          className="image-container"
          style={{ width: "414px", position: "relative", margin: " 0 auto" }}
        >
          <Link to="/vulva/Labia majora pudendi">
            <img
              src="/img/basis.png"
              alt=""
              style={{ position: "absolute", top: 0, left: "20%" }}
            />
          </Link>
          <Link to="/vulva/Labia minora pudendi">
            <img
              src="/img/Komissur.png"
              alt=""
              style={{ position: "absolute", top: 0, left: "27%" }}
            />
          </Link>
          <Link to="/vulva/Vestibulum vaginae">
            <img
              src="/img/Scheide.png"
              alt=""
              style={{ position: "absolute", top: "50px", left: "38%" }}
            />
          </Link>
          <Link to="/vulva/inner">
            <img
              src="/img/Introitusvaginae.png"
              alt=""
              style={{ position: "absolute", top: "134px", left: "47%" }}
            />
          </Link>

          <Link to="/vulva">
            <img
              src="/img/smallleft.png"
              alt=""
              style={{ position: "absolute", top: "176px", left: "60%" }}
            />
          </Link>
          <Link to="/vulva">
            <img
              src="/img/smalltop.png"
              alt=""
              style={{ position: "absolute", top: "19px", left: "59.5%" }}
            />
          </Link>
          <Link to="/vulva">
            <img
              src="/img/smalltopleft.png"
              alt=""
              style={{ position: "absolute", top: "20px", left: "34%" }}
            />
          </Link>
          <Link to="/vulva/Clitoris">
            <img
              src="/img/Clitoris.png"
              alt=""
              style={{ position: "absolute", top: "8px", left: "49.5%" }}
            />
          </Link>
          <Link to="/vulva">
            <img
              src="/img/urethra.png"
              alt=""
              style={{ position: "absolute", top: "87px", left: "51.5%" }}
            />
          </Link>
          <Link to="/vulva">
            <img
              src="/img/right.png"
              alt=""
              style={{ position: "absolute", top: "172px", left: "28%" }}
            />
          </Link>
          <Link to="/vulva/Hymen">
            <img
              src="/img/hymen.png"
              alt=""
              style={{ position: "absolute", top: "250px", left: "50%" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
