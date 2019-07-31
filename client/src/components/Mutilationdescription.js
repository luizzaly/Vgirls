import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MutilationDescription extends Component {
  render() {
    return (
      <div className="fgm-container">
        <h2 className="heading-type1">Female genital mutilation (FGM)</h2>
        <p className="p-type1">
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
