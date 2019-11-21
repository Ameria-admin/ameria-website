import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10vw;
`;

const First = () => (
  <Flex>
    <div style={{ flex: "0 0 60%", background: "darkgrey", height: "500px" }}>
      <div></div>
    </div>
    <div style={{ flex: "0 0 30%" }}>
      <h2>Shoreline</h2>
      <p>
        Grayscale is open source and MIT licensed. This means you can use it for
        any project - even commercial projects! Download it, customize it, and
        publish your website!
      </p>
    </div>
  </Flex>
);

export default First;
