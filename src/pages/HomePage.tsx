import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../components/Text';
import Header from '../components/Header';
import MainImage from '../components/MainImage';

const Wrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
`;

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <MainImage />
    </Wrapper>
  );
};

export default HomePage;
