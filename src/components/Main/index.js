import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Schools from "../Schools";
import Contact from "../Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/schools" component={Schools} />
    <Route path="/contact-us" component={Contact} />
  </Switch>
);

export default Main;
