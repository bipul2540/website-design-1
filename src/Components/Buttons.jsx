import React from "react";
import "./../Style/Button.css";

export default function Buttons() {
  return (
    <div>
      <div className="nav-content">
        <div className="content">
          <h1>Want to explore??</h1>
          <p>what is stoping you..</p>
        </div>
        <div className="buttons">
          <button className="big-btn transparent">GET STARTED</button>
          <button className="big-btn filled">
            Watch TRAILER
            <i className="fa fa-play-circle" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
