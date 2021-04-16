import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finder from "./components/finder";

function App() {
  return (
    <Router>
      <div>
        <Finder />
        <Switch>
          <Route path="/" render={() => <div />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
