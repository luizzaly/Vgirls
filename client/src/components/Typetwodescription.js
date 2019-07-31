import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typetwodescription extends Component {
  render() {
    return (
      <div className="fgm-container">
        <h2 className="heading-type2">Female genital mutilation Type 2</h2>
        <p className="p-type2">
          The clitoris, the inner labia are removed. Sometimes the outer labia
          will be removed, too.
        </p>
        <button className="butn description">
          <Link class="btn-embryology" to={`/type3`}>
            Learn about type 3
          </Link>
        </button>
      </div>
    );
  }
}
