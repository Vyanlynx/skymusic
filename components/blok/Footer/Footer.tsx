import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top:1em
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <Text>&copy; {new Date().getFullYear()} Sky Music!</Text>
    </FooterContainer>
  );
}

export default Footer;
