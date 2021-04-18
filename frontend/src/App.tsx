import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finder from "./components/finder";
import ResultSearch from "./pages/resultSearch";
import "./index.scss";

function App() {
  return (
    <Router>
      <div>
        <Finder />
        <div className="app-content">
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/items" component={ResultSearch} />
            <Route exact path="/items/:id" render={() => <div>DETAILLE DE COMPONENETE</div>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
