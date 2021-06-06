import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';
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
        <AuthForm type="register" />
      </AuthTemplate>
      <Footer />
    </Wrapper>
  );
};

export default RegisterPage;
