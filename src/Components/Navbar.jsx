import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import "./../Style/Navbar.css";
import vedio from "./../vedio/video-1.mp4";

function Navbar() {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <video autoPlay muted loop className="video">
          <source src={vedio} type="video/mp4" />
        </video>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" className="logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <div className={isActive ? "nav-items" : "nav-items nav-items2"}>
            <ul className="nav-links">
              <li className="link">
                <Link className="home" to="/home">
                  Home
                </Link>
              </li>
              <li className="link">
                <Link className="about" to="/food">
                  Food
                </Link>
              </li>
              <li className="link">
                <Link className="service" to="/service">
                  Service
                </Link>
              </li>
              <li className="link">
                <Link className="contact" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/** CREATING BURGER  */}
          <div
            className={isActive ? "burger" : "burger toggle"}
            onClick={handleClick}
          >
            <div className="list1"></div>
            <div className="list2"></div>
            <div className="list3"></div>
          </div>
        </div>
        <Buttons />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
