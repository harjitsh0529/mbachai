import React from "react";
import video from "../assets/mp42.mp4"
const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;