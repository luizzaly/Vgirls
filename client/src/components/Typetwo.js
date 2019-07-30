import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typetwo extends Component {
  render() {
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        ) : (
        <div className="fgm-header">
          <h2> FGM Type 2</h2>
        </div>
        <div
          className="image-container fgm"
          style={{
            width: "414px",
            position: "relative",
            marginTop: "26vh"
          }}
        >
          <Link to="">
            <img
              class=""
              src="/img/basis.png"
              alt=""
              style={{ position: "absolute", top: 0, left: "20%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/Komissur.png"
              alt=""
              style={{ position: "absolute", top: 0, left: "27%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/Scheide.png"
              alt=""
              style={{ position: "absolute", top: "50px", left: "38%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/Introitusvaginae.png"
              alt=""
              style={{ position: "absolute", top: "134px", left: "47%" }}
            />
          </Link>

          <Link to="">
            <img
              src="/img/smallleft.png"
              alt=""
              style={{ position: "absolute", top: "176px", left: "60%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/smalltop.png"
              alt=""
              style={{ position: "absolute", top: "19px", left: "59.5%" }}
            />
          </Link>
          <Link to="">
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
          <Link to="">
            <img
              src="/img/urethra.png"
              alt=""
              style={{ position: "absolute", top: "87px", left: "51.5%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/right.png"
              alt=""
              style={{ position: "absolute", top: "172px", left: "28%" }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/hymen.png"
              alt=""
              style={{ position: "absolute", top: "250px", left: "50%" }}
            />
          </Link>
          <Link to="/type3-explanation">
            <img
              src="/img/typeone.png"
              alt=""
              style={{ position: "absolute", top: "5px", left: "45%" }}
            />
          </Link>
          <Link to="/type2-explanation">
            <img
              src="/img/cutright.png"
              alt=""
              style={{ position: "absolute", top: "14px", left: "26%" }}
            />
          </Link>
          <Link to="type2-explanation">
            <img
              src="/img/cutleft.png"
              alt=""
              style={{ position: "absolute", top: "16px", left: "55%" }}
            />
          </Link>

          <Link class="click-here" to="/type2-explanation">
            Click here ffff
          </Link>

          {/* </Link>
          <button onClick={this.handleSubmit} className="btn-cut">
            <i class="fas fa-cut" />
            <Link class="" to />
          </button> */}
        </div>
      </div>
    );
  }
}
