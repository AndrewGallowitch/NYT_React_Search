import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header"
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
      
    );
  }
}

export default App;
