import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Content.css";
import NavBar from "./NavBar";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div className="Content">
      <NavBar />
      <div className="container">BANANA</div>
    </div>
  );
}
