import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const App = props => (
  <BrowserRouter basename="ameria-website">
    <Header />
    <Main />
  </BrowserRouter>
);

export default App;
