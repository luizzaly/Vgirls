import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Fullcut extends Component {
  render() {
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        ) : (
        <div className="fgm-header">
          <h2> FGM Type 3</h2>
        </div>
        <div
          className="image-container fgm"
          style={{
            width: "414px",
            position: "relative",
            marginTop: "26vh"
          }}
        >
          <Link to="/type3-explanation">
            <img
              class="fullcut"
              src="/img/fullcut.png"
              alt=""
              style={{ position: "absolute", top: 0, left: "20%" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
