import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
