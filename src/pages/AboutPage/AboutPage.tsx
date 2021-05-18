import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Header from '../../components/common/Header';
import AboutViewer from '../../components/about/AboutViewer';

const Wrapper = styled.div``;

const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Text>About</Text>
      <AboutViewer />
    </Wrapper>
  );
};

export default AboutPage;
