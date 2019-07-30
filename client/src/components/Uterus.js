import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Uterus extends Component {
  render() {
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        ) : (
        <div
          className="image-container"
          style={{
            width: "414px",
            position: "relative",
            marginTop: "26vh"
          }}
        >
          <Link to="">
            <img
              className="f"
              src="/img/uterusupperhalf.png"
              alt=""
              style={{
                position: "absolute",
                top: "-33px",
                left: "26%",
                width: "48%"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/uterusbottomhalf.png"
              alt=""
              style={{
                position: "absolute",
                top: "160px",
                left: "34.5%",
                width: "34.5%"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/uteruspart.png"
              alt=""
              style={{
                position: "absolute",
                top: "5px",
                left: "26%",
                width: "47%"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/vagina.png"
              alt=""
              style={{
                position: "absolute",
                top: "228px",
                left: "42%",
                width: "17%"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/ovaleft.png"
              alt=""
              style={{
                position: "absolute",
                top: "66px",
                left: "5%",
                width: "25%",
                zIndex: "-33333"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/ovaright.png"
              alt=""
              style={{
                position: "absolute",
                top: "64px",
                left: "71.5%",
                width: "25%",
                zIndex: "-5"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/oviductleft.png"
              alt=""
              style={{
                position: "absolute",
                top: "8px",
                left: "4%",
                width: "29%",
                zIndex: "-2"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/oviductright.png"
              alt=""
              style={{
                position: "absolute",
                top: "4px",
                left: "66.5%",
                width: "31%",
                zIndex: "-1"
              }}
            />
          </Link>
          <Link to="">
            <img
              src="/img/cervix.png"
              alt=""
              style={{
                position: "absolute",
                top: "191px",
                left: "45.5%",
                width: "10%"
              }}
            />
          </Link>{" "}
          {/* <div className="flex-container">
            <button className="btn-cut">
              <Link className="" to={`/femalegenitalmutilation`}>
                <i className="fas fa-cut" />
              </Link>
            </button>
            <button className="btn-cut">
              <Link className="" to={`/femalegenitalmutilation`}>
                <img src="/img/uterus.svg" />
              </Link>
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
