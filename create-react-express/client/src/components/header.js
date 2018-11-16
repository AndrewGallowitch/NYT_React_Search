import React from "react";
import "./header.css";
import Background from "../images/coffee-and-newspaper.jpg";

const Header = props => (
  <div id="head" className="jumbotron bg-gradient-dark" style={{backgroundImage: `url(${Background})`}}>
  
  <h1 className="text-light display-4">New York Times Article Scrubber</h1>
    <hr className="my-4" />
    <p className="lead font-weight-bold text-white">Search for and annotate articles of interest</p>
  
  </div>
);

export default Header;
