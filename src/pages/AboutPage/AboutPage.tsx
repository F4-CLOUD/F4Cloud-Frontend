import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import AboutViewer from '../../components/about/about';
import HeaderContainer from '../../container/auth/HeaderContainer';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <HeaderContainer />
      <AboutViewer />
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;
