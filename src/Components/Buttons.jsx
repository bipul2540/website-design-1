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
          <button className="btn-big transparent">GET STARTED</button>
          <button className="btn-big filled">Watch TRAILER</button>
        </div>
      </div>
    </div>
  );
}
