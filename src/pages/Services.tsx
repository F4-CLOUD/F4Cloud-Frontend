import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

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

const Contents = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const ContentsBox1 = styled.div`
  position: relative;
  float: left;
  width: 45%;
  height: 270px;
  margin: 2.5%;
`;

const ContentsBox2 = styled.div`
  position: relative;
  clear: right;
  float: right;
  width: 45%;
  height: 270px;
  margin: 2.5%;
`;

const ContentsBox3 = styled.div`
  position: relative;
  float: left;
  width: 45%;
  height: 270px;
  margin: 2.5%;
`;

const ContentsBox4 = styled.div`
  position: relative;
  clear: right;
  float: right;
  width: 45%;
  height: 270px;
  margin: 2.5%;
`;

const ContentsTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ContentsDescription = styled.div``;

const LearnmoreButton = styled.button`
  position: absolute;
  bottom: 0;
  background-color: white;
  color: blue;
  font-size: 15px;
  width: 125px;
  height: 40px;
  border-width: 1px;
  border-radius: 4px;
  border-color: blue;
  cursor: pointer;
`;

const Services = () => {
  return (
    <Wrapper>
      <Header />
      <Title>Services</Title>
      <Contents>
        <ContentsBox1>
          <ContentsTitle>제목으로 검색</ContentsTitle>
          <ContentsDescription>
            키워드 검색을 통해 제목 검색 결과를 확인해보세요!
          </ContentsDescription>
          <LearnmoreButton>Learn more</LearnmoreButton>
        </ContentsBox1>
        <ContentsBox2>
          <ContentsTitle>인물 및 사물 검색</ContentsTitle>
          <ContentsDescription>
            사진 속에서 주변 인물들을 검색해보세요! 구글 포토에서만 제공되는 기능을 F4CLOUD에서
            경험해보세요. 음식이나 사물을 검색해보세요.
          </ContentsDescription>
          <LearnmoreButton>Learn more</LearnmoreButton>
        </ContentsBox2>
        <ContentsBox3>
          <ContentsTitle>해시태그 검색</ContentsTitle>
          <ContentsDescription>
            문서 내에서 해시태그를 달아주는 기능을 제공합니다. 해시태그로 검색을 편하게
            이용해보세요!
          </ContentsDescription>
          <LearnmoreButton>Learn more</LearnmoreButton>
        </ContentsBox3>
        <ContentsBox4>
          <ContentsTitle>Scalability와 Availability</ContentsTitle>
          <ContentsDescription>
            Amazon EC2의 Auto Scaling설정과 load balancing을 설정하여 Scalability와 Availability를
            보장합니다.
          </ContentsDescription>
          <LearnmoreButton>Learn more</LearnmoreButton>
        </ContentsBox4>
      </Contents>
    </Wrapper>
  );
};

export default Services;
