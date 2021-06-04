import React from 'react';
import styled from 'styled-components';
import Work from 'components/work/Work';
import Navbar from '../../components/nav/Navbar';
import Service from 'components/services/Services';
import AboutViewer from '../../components/about/about';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <AboutViewer />
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;
