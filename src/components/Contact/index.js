import React from "react";
import styled from "styled-components";
import InfoBlock from "./InfoBlock";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20vh 0;
  background: #e0e0e0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 4rem;
  width: 50vw;
  border-radius: 5px;
`;

const BlockWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Third = () => (
  <Wrapper>
    {/* <div style={{ fontSize: "2rem", padding: "50px 0" }}>
      Subscribe to receive updates!
    </div>
    <div style={{ marginBottom: "100px" }}>
      <Input type="text" placeholder="Enter email address..." />
      <button style={{ height: "4rem", width: "10vw", borderRadius: "5px" }}>
        Subscribe
      </button>
    </div> */}

    <BlockWrapper>
      {/* <InfoBlock title="Address" content="address" /> */}
      <InfoBlock title="Email" content="email" icon={faAt} />
      <InfoBlock
        title="Phone/Whatsapp"
        content="+852 5193 7205"
        icon={faPhone}
      />
    </BlockWrapper>
  </Wrapper>
);

export default Third;
