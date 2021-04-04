import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../components/Text';

const Wrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
`;

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Text>F4CLOUD</Text>
      <Text> 클라우드 소개 </Text>
      <Text> 독보적인 검색 기능을 제공하는 F4CLOUD를 사용해보세요!</Text>
      <Text> 주요 기능 </Text>
      <Link to="/login"> 로그인</Link>
      <Link to="/register"> 회원가입</Link>
      <Link to="/@:username/"> 유저 클라우드 </Link>
    </Wrapper>
  );
};

export default HomePage;
