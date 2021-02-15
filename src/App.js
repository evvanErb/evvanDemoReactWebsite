import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Calculator from "./components/calculator/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="app">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/calculator" exact component={() => <Calculator />} />
        </Switch>
        <Footer />
      </Router>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
