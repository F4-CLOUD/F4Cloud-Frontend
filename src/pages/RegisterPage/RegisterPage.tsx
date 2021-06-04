import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';
import Navbar from '../../components/nav/Navbar';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const RegisterPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
      <Footer />
    </Wrapper>
  );
};

export default RegisterPage;
