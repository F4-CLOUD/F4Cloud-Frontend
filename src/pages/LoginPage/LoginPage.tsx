import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthFormJ';
import LoginForm from '../../container/auth/LoginForm';
import HeaderContainer from '../../container/auth/HeaderContainer';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <HeaderContainer />
      <AuthTemplate>
        {/* <AuthForm type="login" /> */}
        <LoginForm />
      </AuthTemplate>
      <Footer />
    </Wrapper>
  );
};

export default LoginPage;
