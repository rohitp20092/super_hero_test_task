import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSearch from "./components/heros/HeroesSearch";
import ShowSearchedHistory from "./components/History/ShowSearchedHistory"
import HeroDetails from './components/heros/HeroDetails'
// import HeroDetails from "./components/heros/HeroDetails";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
          <Switch>
          <Route exact path="/">
             <HeroSearch/>
          </Route>
          <Route exact path="/history">
            <ShowSearchedHistory/>
          </Route>
          <Route exact path='/details/:id'>
            <HeroDetails />
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;

