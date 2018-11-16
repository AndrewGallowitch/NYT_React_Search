import React, { Component } from "react";
import "./header.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light container rounded">
        <h2 className="text-center pt-3 display-5 font-weight-bold text-dark">Search Articles</h2>
        <hr className="mb-3 mx-4" />
        <form>
          <div class="form-group">
            <h5 className="text-dark">Topic</h5>
            <input
              type="text"
              className="form-control shadow-sm p-3 mb-2 bg-white rounded"
              id="topicInput"
              
            />
          </div>
          <div class="form-group">
            <h5 className="text-dark">Start Year</h5>
            <input
              type="text"
              className="form-control shadow-sm p-3 mb-2 bg-white rounded"
              id="topicInput"
              
            />
          </div>
          <div class="form-group">
            <h5 className="text-dark">End Year</h5>
            <input
              type="text"
              className="form-control shadow-sm p-3 mb-2 bg-white rounded"
              id="topicInput"
            
            />
          </div>
          <button type="submit" className="btn btn-dark mb-3">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
