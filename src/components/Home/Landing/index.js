import React from "react";
import styled from "styled-components";
import styles from "./styles.css";

const Wrapper = styled.div`
  background-image: url("assets/santa-monica.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  height: 85vh;
`;

const Landing = () => (
  <Wrapper>
    <h1 className={styles.heading}>Your American Dream Starts Here...</h1>
  </Wrapper>
);

export default Landing;
