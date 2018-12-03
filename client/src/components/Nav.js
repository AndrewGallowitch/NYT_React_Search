import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <h5 className="mr-3 ml-3">
            <NavLink
              className="text-white"
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              Home
            </NavLink>
          </h5>

          <h5>
            <NavLink
              className="text-white"
              to="/saved"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              Saved Articles
            </NavLink>
          </h5>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
