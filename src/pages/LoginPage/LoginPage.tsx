import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';
import Header from '../../components/common/Header';

const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </Wrapper>
  );
};

export default LoginPage;
