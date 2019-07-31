import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typeonedescription extends Component {
  render() {
    return (
      <div>
        <h1>Female genital mutilation Type 1</h1>
        <p>The outer part of the clitoris or parts of it are removed.</p>
        <button className="butn embryology">
          <Link class="btn-embryology" to={`/type2`}>
            Learn about type 2
          </Link>
        </button>
      </div>
    );
  }
}
