import React from "react";
import "./../Style/Card.css";

export default function Card({ title, image }) {
  return (
    <div className="card-container">
      <div className="card">
        <h4>{title}</h4>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
