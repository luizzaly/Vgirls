import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MutilationDescription extends Component {
  render() {
    return (
      <div className="fgm-container">
        <h2 className="heading-type1">Female genital mutilation (FGM)</h2>
        <p className="p-type1">
          Let’s talk about Female genital mutilation (FGM). As a platform from
          women for women, we want to talk about all the problems females face
          around the world. One of them is FGM. FGM is a practice where parts of
          the female external genitalia is cut away. The aim of this practice is
          to control women’s sexuality. Most of the time FGM takes place before
          puberty, mostly between the age four to eight, but also newborns are
          already cut. The procedure is usually done without any anaesthetic and
          under extremely unhygienic conditions. The cutting instruments are
          razors, broken glass, scissors or knives. Transmitting of HIV or
          Hepatitis C is possible via dirty instruments. In some forms of FGM
          the flesh is sewn or stapled together. Also bacterial infections are
          possible, in the worst case resulting in death. Long-term effects are
          life-long pain, loss of sexual sensation and psychological trauma. It
          takes place in Africa, Middle East, South-East Asia and also amongst
          immigrants in non-performing countries in form of “vacation-cutting”
          (flying out young girls to countries where cutting is still
          performed). Even in non-performing countries, there are still some
          individuals cutting young children. In solidarity with all the women
          who had to undergo that procedure, we want to educate you about the
          different forms and the dangers of the procedure. This ritual needs to
          be stopped. The following drawings can be traumatizing for some.
        </p>
        <button className="butn embryology bottom">
          <Link class="btn-embryology" to={`/type1`}>
            See FGM
          </Link>
        </button>
      </div>
    );
  }
}
