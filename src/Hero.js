import React from "react";
import HeroVideo from "./hero.mp4";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="hero">
      <video className="Video" src={HeroVideo} autoPlay loop muted />

      <div className="hero-button">
        <button type="button" class="btn btn-primary ">
          {/* Learn More */}
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
    </div>
  );
}
