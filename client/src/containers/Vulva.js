import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Z_HUFFMAN_ONLY } from "zlib";

export default class Vulva extends Component {
  state = {
    vulva: [],
    selected: "",
    showGif: true,
    gifArray: [
      "https://media.giphy.com/media/l1AsAV04FCMOoFyHm/giphy.gif",
      "https://media.giphy.com/media/l0MYrnI0j55zx11HG/giphy.gif",
      "https://media.giphy.com/media/B3LbPvoMoDYyc/giphy.gif",
      "https://media.giphy.com/media/AQvruPcQueMAo/giphy.gif",
      "https://media.giphy.com/media/5YiVBGvevSx8sUD6kP/giphy.gif",
      "https://media.giphy.com/media/cdICHA6rKm3eXicQfJ/giphy.gif",
      "https://media.giphy.com/media/9rrljkZoLqxZMDvQn0/giphy.gif",
      "https://media.giphy.com/media/TEnq1cc5pEb2Sz8pwP/giphy.gif",
      "https://media.giphy.com/media/3kHBUxaBZSSk4x3j3x/giphy.gif",
      "https://media.giphy.com/media/cMQUfOPEd9zsZwAfKs/giphy.gif",
      "https://media.giphy.com/media/Jrf6QkGpuob4qHAoxL/giphy.gif"
    ]
  };

  getData = () => {
    axios
      .get("/vulva")
      .then(response => {
        this.setState({
          vulva: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
    setTimeout(() => {
      this.setState({ showGif: false });
    }, 4000);
  }
  handleclick = () => {
    this.setState({ selected: "Clitoris" }, () => {
      console.log(this.state.vulva[1]._id);
      this.props.history.push({
        pathname: `vulva/${this.state.vulva[1].title}`,
        state: { title: this.state.vulva[1].title }
      });
    });
  };

  render() {
    let bodypart = this.state.vulva.find(part => {
      return part.title === this.state.selected;
    });
    console.log(bodypart);

    //const gifArray = ["https://media.giphy.com/media/VILJHh5AodVIs/giphy.gif"];
    let randomGif = [
      Math.floor(Math.random() * (this.state.gifArray.length + 1))
    ];
    let ourGif = this.state.gifArray[randomGif];
    console.log(ourGif);
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}

        {this.state.showGif && ourGif ? (
          <div class="container-gif">
            <img class="gif" src={ourGif} alt="" />
          </div>
        ) : (
          <div
            className="image-container"
            style={{ width: "414px", position: "relative", margin: " 0 auto" }}
          >
            <Link to="/vulva/Labia majora pudendi">
              <img
                class="basis"
                src="/img/basis.png"
                alt=""
                style={{ position: "absolute", top: 0, left: "20%" }}
              />
            </Link>
            <Link to="/vulva/Labia minora pudendi">
              <img
                src="/img/Komissur.png"
                alt=""
                style={{ position: "absolute", top: 0, left: "27%" }}
              />
            </Link>
            <Link to="/vulva/Vestibulum vaginae">
              <img
                src="/img/Scheide.png"
                alt=""
                style={{ position: "absolute", top: "50px", left: "38%" }}
              />
            </Link>
            <Link to="/vulva/Introitus vaginae">
              <img
                src="/img/Introitusvaginae.png"
                alt=""
                style={{ position: "absolute", top: "134px", left: "47%" }}
              />
            </Link>

            <Link to="/vulva">
              <img
                src="/img/smallleft.png"
                alt=""
                style={{ position: "absolute", top: "176px", left: "60%" }}
              />
            </Link>
            <Link to="/vulva">
              <img
                src="/img/smalltop.png"
                alt=""
                style={{ position: "absolute", top: "19px", left: "59.5%" }}
              />
            </Link>
            <Link to="/vulva">
              <img
                src="/img/smalltopleft.png"
                alt=""
                style={{ position: "absolute", top: "20px", left: "34%" }}
              />
            </Link>
            <Link to="/vulva/Clitoris">
              <img
                src="/img/Clitoris.png"
                alt=""
                style={{ position: "absolute", top: "8px", left: "49.5%" }}
              />
            </Link>
            <Link to="/vulva/Urethral Opening">
              <img
                src="/img/urethralopening.png"
                alt=""
                style={{ position: "absolute", top: "87px", left: "51.5%" }}
              />
            </Link>
            <Link to="/vulva">
              <img
                src="/img/right.png"
                alt=""
                style={{ position: "absolute", top: "172px", left: "28%" }}
              />
            </Link>
            <Link to="/vulva/Hymen">
              <img
                src="/img/hymen.png"
                alt=""
                style={{ position: "absolute", top: "250px", left: "50%" }}
              />
            </Link>
          </div>
        )}
      </div>
    );
  }
}
