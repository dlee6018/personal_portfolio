import React from "react";
import "./Header.scss";
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-content">
      <Navigation />
      <div className="text-content">
        <h1>
          I am David The <span>Software Engineer</span>
        </h1>
        <p>I specialize in Fullstack Web and Scripting</p>
      </div>
      <NavLink to="/work" exact className="btn-light">
        View My Work
      </NavLink>
    </div>
  );
};

export default Header;
