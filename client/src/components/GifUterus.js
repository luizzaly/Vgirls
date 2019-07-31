import React, { Component } from "react";
import { Z_HUFFMAN_ONLY } from "zlib";
import { Link } from "react-router-dom";

export default class GifUterus extends Component {
  state = {
    showGif: true,
    gifArray: [
      "https://media.giphy.com/media/ks8DTZMY4abVm/giphy.gif",
      "https://media.giphy.com/media/B3LbPvoMoDYyc/giphy.gif",
      "https://media.giphy.com/media/ddCPv2v3k2RWvE1uA3/giphy.gif",
      "https://media.giphy.com/media/3o7abBphHJngINCHio/giphy.gif",
      "https://media.giphy.com/media/cdICHA6rKm3eXicQfJ/giphy.gif",
      "https://media.giphy.com/media/9rrljkZoLqxZMDvQn0/giphy.gif",
      "https://media.giphy.com/media/TEnq1cc5pEb2Sz8pwP/giphy.gif",
      "https://media.giphy.com/media/3kHBUxaBZSSk4x3j3x/giphy.gif",
      "https://media.giphy.com/media/cMQUfOPEd9zsZwAfKs/giphy.gif",
      "https://media.giphy.com/media/aiWj4oJU17sioqy65J/giphy.gif"
    ]
  };

  render() {
    let randomGif = [
      Math.floor(Math.random() * (this.state.gifArray.length + 1))
    ];
    let ourGif = this.state.gifArray[randomGif];
    console.log(ourGif);
    return (
      <div>
        <div className="container-gif">
          <Link to="/uterus">
            <img className="gif" src={ourGif} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}
