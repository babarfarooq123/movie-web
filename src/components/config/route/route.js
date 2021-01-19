import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../../screens/home";
import About from "../../../screens/about";
import MovieDetails from "../../../screens/movieDetails";
import Characterclick from "../../../screens/characterClick";
import SearchBar from "../../../screens/searchbar"
import Login from "../../../screens/login"
import MostPopular from "../../../screens/mostPopular"
import Recommendation from "../../../screens/recommendation"
import ShowRecommendation from "../../showrecommendation"
import EpisodeClick from "../../../screens/episodeClick"
import EpisodeChat from "../../../screens/episodeChat"
import News from "../../../screens/news"
import Settings from "../../../screens/settings"

export default function RouteApp() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/movies" component={MovieDetails} />
            <Route exact path="/characterclick" component={Characterclick} />
            <Route exact path="/search" component={SearchBar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/popular" component={MostPopular} />
            <Route exact path="/recommendation" component={Recommendation} />
            <Route exact path="/showrecommendation" component={ShowRecommendation} />
            <Route exact path="/episode" component={EpisodeClick} />
            <Route exact path="/comments" component={EpisodeChat} />
            <Route exact path="/news" component={News} />
            <Route exact path="/settings" component={Settings} />
        </Switch>
    </Router>
  );
}