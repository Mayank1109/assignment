import React from "react";
import { NavLink } from "react-router-dom";
import "./sideNavigation.css";
import logo from "../../assets/logo.png";

const SideNavigation = () => {
  return (
    <>
      <ul className="navbar__sidebar" id="sideBar">
        <div className="main_icons color_it">
          <img src={logo} />
        </div>
        <div className="menu_list color_it">
          <NavLink to="/">
            <li>Cart</li>
          </NavLink>
        </div>
        <div className="menu_list color_it">
          <NavLink to="/">
            <li>
              <div className="icon"></div>
              Market
            </li>
          </NavLink>
        </div>
        <div className="menu_list color_it">
          <NavLink to="/">
            <li>
              <div className="icon"></div>
              Settings
            </li>
          </NavLink>
        </div>
        <div className="menu_list color_it">
          <NavLink to="/">
            <li>
              <div className="icon"></div>
              logout
            </li>
          </NavLink>
        </div>
      </ul>
    </>
  );
};

export default SideNavigation;
