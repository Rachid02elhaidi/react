import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="container">
          <div  className="logo">
            <h2 className="logo-text">Ultra Profile</h2>
          </div>
          <ul className="ul-list">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/work">Work</Link></li>
            <li className="list-item"><Link to="/profile">Profile</Link></li>
            <li className="list-item"><Link to="/portfolio">Portfolio</Link></li>
            <li className="list-item"><Link to="/about">About</Link></li>
            <li className="list-item"><Link to="/social_media">Social Media</Link></li>
            <li className="list-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
