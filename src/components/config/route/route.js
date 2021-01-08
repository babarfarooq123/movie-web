import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../../screens/home";
import About from "../../../screens/about";
import MovieDetails from "../../../screens/movieDetails";

export default function RouteApp() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/movies" component={MovieDetails} />
        </Switch>
    </Router>
  );
}