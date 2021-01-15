import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../../screens/home";
import About from "../../../screens/about";
import MovieDetails from "../../../screens/movieDetails";
import Characterclick from "../../../screens/characterClick";

export default function RouteApp() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/movies" component={MovieDetails} />
            <Route exact path="/characterclick" component={Characterclick} />
        </Switch>
    </Router>
  );
}