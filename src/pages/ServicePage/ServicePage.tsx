import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import Service from 'components/services/Services';
import Footer from 'components/footer/footer';
import HeaderContainer from '../../container/auth/HeaderContainer';

const Wrapper = styled.div``;

const ServicePage: React.FC = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <HeaderContainer />
      <Service />
      <Footer />
    </Wrapper>
  );
};

export default ServicePage;
