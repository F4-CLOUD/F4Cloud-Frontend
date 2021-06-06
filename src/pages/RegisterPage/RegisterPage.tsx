import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../container/auth/RegisterForm';
import Navbar from '../../components/nav/Navbar';
import Footer from 'components/footer/footer';

const Wrapper = styled.div``;

const RegisterPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
      <Footer />
    </Wrapper>
  );
};

export default RegisterPage;
