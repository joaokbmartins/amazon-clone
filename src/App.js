import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";

import "./App.css";

function App() {
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
