import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";

const Main = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/contact-us" component={Contact} />
  </Switch>
);

export default Main;
