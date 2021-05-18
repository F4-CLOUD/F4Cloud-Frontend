import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Header from '../../components/common/Header';
import ContactViewer from '../../components/contact/ContactViewer';

const Wrapper = styled.div``;

const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Text>Contact</Text>
      <ContactViewer />
    </Wrapper>
  );
};

export default AboutPage;
