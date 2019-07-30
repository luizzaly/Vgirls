import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MutilationDescription extends Component {
  render() {
    return (
      <div>
        <h1>Female genital mutilation (FGM)</h1>
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
          <Link class="btn-embryology" to={`/type1`}>
            See FGM
          </Link>
        </button>
      </div>
    );
  }
}
