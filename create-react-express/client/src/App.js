import React, { Component } from "react";
import Header from "./components/header"
import Search from "./components/searchBox"
import Results from "./components/results"
import Saved from "./components/saved"


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Search />
        <br />
        <Results />
        <br />
        <Saved />
      </div>
    );
  }
}

export default App;
