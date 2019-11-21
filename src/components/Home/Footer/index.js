import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: #e0e0e0;
  justify-content: center;
  padding-bottom: 100px;
`;

const LogoContainer = styled.div`
  width: 30px;
  margin: 0 100px;
  background: transparent;
  textalign: center;

  &:hover {
    cursor: pointer;
  }
`;

const Footer = ({ children }) => <Wrapper>{children}</Wrapper>;

Footer.Social = ({ logo, name }) => (
  <LogoContainer>
    <img src={logo} alt={name} />
  </LogoContainer>
);

Footer.Social.PropTypes = {
  logo: PropTypes.string,
  name: PropTypes.string
};

export default Footer;
