import React from 'react';
import styled from 'styled-components';
import Contact from '../../components/contact/contact';
import Navbar from '../../components/nav/Navbar';
import HeaderContainer from '../../container/auth/HeaderContainer';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const ContactPage: React.FC = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <HeaderContainer />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default ContactPage;
