import React, { Component } from "react";
import "./header.css";

class Saved extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light container rounded">
        <h2 className="text-center pt-3 display-5 font-weight-bold text-dark">Saved Articles</h2>
        <hr className="mb-3 mx-4" />
        <div className="resultContainer">

        </div>
      </div>
    );
  }
}

export default Saved;