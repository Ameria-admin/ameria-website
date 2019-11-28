import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import styled from "styled-components";

const Nav = styled.div`
  font-size: 16px;
  transition: font-size 0.2s;

  &:hover {
    font-size: 24px;
  }
`;

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles["logo-container"]}>
      <Link to="/">
        <img className={styles.logo} src="assets/logo.jpeg" alt="logo" />
      </Link>
    </div>
    <div className={styles.nav}>
      <Link to="/">
        <Nav>Home</Nav>
      </Link>
      <Link to="/about">
        <Nav>About</Nav>
      </Link>
      <Link to="/services">
        <Nav>Services</Nav>
      </Link>
    </div>
    {/* <Link to="contact-us">Contact Us</Link> */}
  </div>
);

export default Header;
