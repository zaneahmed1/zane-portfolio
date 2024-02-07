import React from "react";
import "./About.css";
import laptop from "../Components/programming.png"
import speech from "../Components/text-to-speech.png"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <h3>
        Hi, I'm Zane Ahmed, a full stack web developer based in Dallas. I love
        solving problems and making digital stuff easy to use. Let's work
        together to make the web more accessible.
        </h3>
      </div>
      <div className="about-right">
        <div className="row">
          <img
            src={laptop}
            alt="image of laptop with code"
          />
        </div>
        <div className="row">
        <img
            src={speech}
            alt="image of text to speech tool"
          />
        </div>
        <div className="row"></div>
        <img
            src={laptop}
            alt="image of laptop with code"
          />
      </div>
    </div>
  );
}
//Add images to each row instead of the hello
