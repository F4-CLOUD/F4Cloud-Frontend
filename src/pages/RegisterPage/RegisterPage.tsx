import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthFormJ';
import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../container/auth/RegisterForm';
import Navbar from '../../components/nav/Navbar';
import Footer from 'components/footer/footer';
import { userApi } from '../../api/api-user';

const Wrapper = styled.div``;

const RegisterPage: React.FC = () => {
  // const fetchData = async () => {
  //   let result = null;
  //   try {
  //     result = await userApi.signUp();
  //   } catch (error) {
  //     console.log('회원가입 에러!', error);
  //   }
  // };

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
