import React from "react";
import { withRouter } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Footer from "./Footer";
import "./styles.css";

const Home = () => (
  <div className="home">
    <img className="image" src="assets/santa-monica.jpg" alt="santa-monica" />
    <First />
    <Second />
    <Third />
    <Footer>
      <Footer.Social logo="assets/facebook.svg" name="facebook" />
      <Footer.Social logo="assets/instagram.svg" name="instagram" />
      <Footer.Social logo="assets/twitter.svg" name="twitter" />
    </Footer>
  </div>
);

export default withRouter(Home);
