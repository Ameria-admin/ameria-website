import React from "react";
import { withRouter } from "react-router-dom";
import Landing from "./Landing";
import Footer from "./Footer";
import styled from "styled-components";

const Home = () => (
  <div>
    <Landing />
    {/* <Footer>
      <Footer.Social logo="assets/facebook.svg" name="facebook" />
      <Footer.Social logo="assets/instagram.svg" name="instagram" />
      <Footer.Social logo="assets/twitter.svg" name="twitter" />
    </Footer> */}
  </div>
);

export default withRouter(Home);
