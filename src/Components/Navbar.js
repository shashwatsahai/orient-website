import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <NavLink className="navbar-brand" exact to="/" activeClassName="active">
      Orient Creation
    </NavLink>

    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Home<span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact
            to="/gallery"
            activeClassName="active"
          >
            Gallery
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Kiosk
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Showcase
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact
            to="/contact"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
