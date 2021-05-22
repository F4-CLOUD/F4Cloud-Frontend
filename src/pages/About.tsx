import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  margin-top: 70px;
`;

const Title = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  font-size: 40px;
  font-family: fantasy;
  background-color: #f7f7f7;
`;

const About = () => {
  return (
    <Wrapper>
      <Header />
      <Title>About</Title>
    </Wrapper>
  );
};

export default About;
