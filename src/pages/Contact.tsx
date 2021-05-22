import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 70px;
  background-color: #f7f7f7;
`;

const Title = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  font-size: 40px;
  font-family: fantasy;
  background-color: #f7f7f7;
`;

const SubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
`;

const Role = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 25px;
  margin-top: 30px;
`;

const DevWrap = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const DevBox = styled.div`
  margin: 40px;
`;

const DevImg = styled.img`
  display: felx;
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
`;

const DevName = styled.div`
  font-size: 20px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Header />
      <Title>Contact</Title>
      <SubTitle>F4CLOUD TEAM</SubTitle>
      <Role>Frontend Developer</Role>
      <DevWrap>
        <DevBox>
          <DevImg src="person.png"></DevImg>
          <DevName>장규범</DevName>
        </DevBox>
        <DevBox>
          <DevImg src="person.png"></DevImg>
          <DevName>황성연</DevName>
        </DevBox>
      </DevWrap>
      <Role>Backend Developer</Role>
      <DevWrap>
        <DevBox>
          <DevImg src="person.png"></DevImg>
          <DevName>김서현</DevName>
        </DevBox>
        <DevBox>
          <DevImg src="person.png"></DevImg>
          <DevName>노서연</DevName>
        </DevBox>
        <DevBox>
          <DevImg src="person.png"></DevImg>
          <DevName>이상화</DevName>
        </DevBox>
      </DevWrap>
    </Wrapper>
  );
};

export default Contact;
