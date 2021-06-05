import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Hobbies from "../components/Hobbies";
import Hobby from "../components/Hobby";
import NewHobby from "../components/NewHobby";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hobbies" exact component={Hobbies} />
      <Route path="/hobby/:id" exact component={Hobby} />
      <Route path="/hobby" exact component={NewHobby} />
    </Switch>
  </Router>
);
