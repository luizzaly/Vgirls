import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <div class="header-container">
        <h1 class="valueprop">Empower yourself</h1>
        <br />
        <h1 class="valuepropo">Let's discover the female body</h1>

        <h3 class="header-text">We are all different</h3>
      </div>
      <div className="carouselcolor">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/vagina1.png"
              alt="First slide"
              width={200}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/vagina2.png"
              alt="Third slide"
              width={200}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/vagina3.png"
              alt="Third slide"
              width={200}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/vagina4.png"
              alt="First slide"
              width={200}
              height={400}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="dreieck" />
      <div className="about">
        <h3>About</h3>
        <p>
          The female body. So many myths, so many secrets. We from VGirls want
          to educate and empower young women with knowledge about their bodies.
          Click on the bodypart you want to know more about.
        </p>
      </div>
      {/* <svg
        id="bottom-triangle"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg> */}
    </div>
  );
};
export default Home;
