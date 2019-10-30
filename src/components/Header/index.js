import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <div className="wrapper">
    <Link className="logo-link" to="/">
      <img className="logo" src="./../assets/lafc-logo.png" alt="logo" />
    </Link>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/schools">America</Link>
    <Link to="contact-us">Contact Us</Link>
  </div>
);

export default Header;
