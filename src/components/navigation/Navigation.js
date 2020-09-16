import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" exact>
        <img src={Logo} alt="logo" className="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" exact>
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
