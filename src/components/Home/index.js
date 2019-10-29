import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";

const Home = () => (
  <div className="home">
    <img
      className="image"
      src="../../../assets/santa-monica.jpg"
      alt="santa-monica"
    />
  </div>
);

export default withRouter(Home);
