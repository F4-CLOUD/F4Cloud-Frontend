import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import Service from 'components/services/Services';
import AboutViewer from '../../components/about/about';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const ServicePage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Service />
      <Footer />
    </Wrapper>
  );
};

export default ServicePage;
