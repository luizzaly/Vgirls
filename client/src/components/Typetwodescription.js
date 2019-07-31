import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typetwodescription extends Component {
  render() {
    return (
      <div>
        <h1>Female genital mutilation Type 2</h1>
        <p>
          The clitoris, the inner labia are removed. Sometimes the outer labia
          will be removed, too.
        </p>
        <button className="butn embryology">
          <Link class="btn-embryology" to={`/type3`}>
            Learn about type 3
          </Link>
        </button>
      </div>
    );
  }
}
