import React from "react";
import styled from "styled-components";
import styles from "./styles.css";

const Flex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10vw;
  background-image: url("assets/books.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  height: 85vh;
`;

const About = () => (
  <Flex>
    <div className={styles.container}>
      <h1 className={styles.heading}> USA Education Consulting Services</h1>
      <p>
        Ameria was founded by a group of young professionals graduated from
        prestigious universities in America. We believe in the importance of
        providing guidance and quality support to our clients in their journey
        on receiving higher education in the United States.
      </p>
    </div>
  </Flex>
);

export default About;
