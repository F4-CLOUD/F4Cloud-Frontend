import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import User from '../../components/user/user';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const UserCloudPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <User />
      <Footer />
    </Wrapper>
  );
};

export default UserCloudPage;
