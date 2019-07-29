import React, { Component } from "react";

export default class Video extends Component {
  state = {
    videoUrl: "https://giphy.com/gifs/l1AsAV04FCMOoFyHm/html5"
  };
  render() {
    return (
      <div>
        {/* <video id="background-video" loop autoPlay>
        <source
          src="https://giphy.com/gifs/l1AsAV04FCMOoFyHm/html5"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      </div>
    );
  }
}
