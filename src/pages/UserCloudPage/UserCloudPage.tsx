import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import Header from '../../components/common/Header';
import User from '../../components/user/user';
import Footer from 'components/footer/footer';
import HeaderContainer from '../../container/auth/HeaderContainer';

const Wrapper = styled.div``;

const UserCloudPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      {/* <Navbar /> */}
      {/* <HeaderContainer /> */}
      <User />
      <Footer />
    </Wrapper>
  );
};

export default UserCloudPage;
