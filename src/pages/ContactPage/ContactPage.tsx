import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Header from '../../components/nav/Navbar';
import Contact from '../../components/contact/contact';
import ContactViewer from '../../components/contact/ContactViewer';
import Navbar from '../../components/nav/Navbar';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const ContactPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default ContactPage;
