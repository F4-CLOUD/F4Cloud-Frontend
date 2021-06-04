import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import AuthTemplate from '../../components/auth/AuthTemplate';
import Navbar from '../../components/nav/Navbar';
import AuthForm from '../../components/auth/AuthForm';
import Header from '../../components/common/Header';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
      <Footer />
    </Wrapper>
  );
};

export default LoginPage;
