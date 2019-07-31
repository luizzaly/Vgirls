import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Typethreedescription extends Component {
  render() {
    return (
      <div className="fgm-container-light">
        <h2 className="heading-type3">Female genital mutilation Type 3</h2>
        <p className="p-type3">
          The outer labia are cut and sewn together to create a seal over the
          urethra and the vagina. This procedure can be done with removing the
          clitoris and inner labia, or without. Especially this procedure has a
          risk for ongoing infections, because the urine and menstrual fluid
          can’t pass the hole. To have sexual intercourse or to give birth, a
          lot of women need to be cut open again.
        </p>
        <button className="butn pink">
          <Link class="btn-pink" to={`/vulva`}>
            Back to overview
          </Link>
        </button>
      </div>
    );
  }
}
