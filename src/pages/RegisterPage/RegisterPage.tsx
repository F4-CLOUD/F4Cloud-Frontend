import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';

const Wrapper = styled.div``;

const RegisterPage: React.FC = () => {
  return (
    <Wrapper>
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
    </Wrapper>
  );
};

export default RegisterPage;
