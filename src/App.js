import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const App = props => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);

export default App;
