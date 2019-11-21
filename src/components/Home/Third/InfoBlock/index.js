import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 70px;
  background: white;
  border-radius: 7px;
  box-shadow: 4px 4px;
  flex: 0 0 25%;
  display: inherit;
  flex-flow: column;
  align-items: center;
`;

const InfoBlock = ({ title, content }) => (
  <Wrapper>
    <div>{title}</div>
    <hr
      style={{ border: "1px solid black", width: "100px", margin: "50px 0" }}
    />
    <div>{content}</div>
  </Wrapper>
);

InfoBlock.PropTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default InfoBlock;
