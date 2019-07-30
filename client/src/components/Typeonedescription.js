import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typeonedescription extends Component {
  render() {
    return (
      <div>
        <h1>Female genital mutilation Type 1</h1>
        <p>
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
        <button className="butn embryology">
          <Link class="btn-embryology" to={`/type2`}>
            Learn about type 2
          </Link>
        </button>
      </div>
    );
  }
}
