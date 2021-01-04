import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Service from "./Service";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/food" exact component={About} />
        <Route path="/service" exact component={Service} />
      </Switch>
    </div>
  );
}

export default App;
