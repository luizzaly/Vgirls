import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typetwodescription extends Component {
  render() {
    return (
      <div className="fgm-container">
        <h2 className="heading-type2">Female genital mutilation Type 2</h2>
        <p className="p-type2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
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
