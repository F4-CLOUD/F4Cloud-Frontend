import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
  margin-top: 70px;
`;

const Mainimg = styled.img`
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  position: absolute;
  width: 15%;
  color: #e1e1e1;
  font-size: 65px;
  font-family: fantasy;
  top: 15%;
  left: 2%;
  white-space: nowrap;
`;

const SubText = styled.div`
  position: absolute;
  width: 15%;
  color: #e1e1e1;
  font-size: 40px;
  font-family: fantasy;
  top: 30%;
  left: 5%;
  white-space: nowrap;
`;

const RegButton = styled.button`
  position: absolute;
  background-color: #4f4f4f;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  top: 45%;
  left: 11.5%;
`;

const MainImage = () => {
  return (
    <Wrapper>
      <Mainimg src="mainimg.png"></Mainimg>
      <Title>Welcome to F4CLOUD</Title>
      <SubText>FOCUS ON Finding Files Fast</SubText>
      <Link to="/register">
        <RegButton>Register Now</RegButton>
      </Link>
    </Wrapper>
  );
};

export default MainImage;
