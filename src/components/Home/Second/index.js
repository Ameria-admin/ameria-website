import React from "react";
import styled from "styled-components";

const Quarters = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10vw;
`;

const Block = styled.div`
  display: inherit;
  flex-flow: column;
  flex: 0 0 50%;
  height: 500px;
  padding: 50px;
  justify-content: center;
`;

const Second = () => (
  <Quarters>
    <Block style={{ background: "#A9A9A9" }}></Block>
    <Block style={{ background: "#e0e0e0" }}>
      <h2>Misty</h2>
      <p>
        An example of where you can put an image of a project, or anything else,
        along with a description.
      </p>
    </Block>
    <Block style={{ background: "#e0e0e0", textAlign: "right" }}>
      <h2>Mountains</h2>
      <p>
        Another example of a project with its respective description. These
        sections work well responsively as well, try this theme on a small
        screen!
      </p>
    </Block>
    <Block style={{ background: "#A9A9A9" }}></Block>
  </Quarters>
);

export default Second;
