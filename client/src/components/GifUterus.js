import React, { Component } from "react";
import { Z_HUFFMAN_ONLY } from "zlib";
import { Link } from "react-router-dom";

export default class GifUterus extends Component {
  state = {
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

  render() {
    let randomGif = [
      Math.floor(Math.random() * (this.state.gifArray.length + 1))
    ];
    let ourGif = this.state.gifArray[randomGif];
    console.log(ourGif);
    return (
      <div>
        <div className="container-gif">
          <Link to="/vulva">
            <img className="gif" src={ourGif} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}
