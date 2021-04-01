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
      <Link to="/login"> 로그인</Link>
    </Wrapper>
  );
};

export default HomePage;
