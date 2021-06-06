import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';
import Button from '../common/Button';
import { userApi } from '../../api/api-user';
// 회원가입, 로그인 폼 보여주는 컴포넌트입니다.

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

// styled input
const StyledInput = styled.input`
  font-size: 1.5rem;
  border: none;
  border:bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%
  &:focus {
    color: $oc-teal-7;
    border-bottom:  1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  } 
`;

// 로그인 or 회원가입 link footer
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTOP = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const onUserIdChange = (e) => {
    console.log('userId', e.target.value);
    setUserId(e.target.value);
  };

  const onPasswordChange = (e) => {
    console.log('password', e.target.value);
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    console.log('confirmPassword', e.target.value);
    setConfirmPassword(e.target.value);
  };

  const onEmailChange = (e) => {
    console.log('email', e.target.value);
    setEmail(e.target.value);
  };

  const signUp = async () => {
    event.preventDefault();
    let signUpResult = null;

    try {
      signUpResult = await userApi.signUp({
        user_id: userId,
        user_password: password,
        confirm_user_password: confirmPassword,
        user_email: email,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(signUpResult);
    }
  };

  const signIn = async () => {
    event.preventDefault();
    let signInResult = null;

    try {
      signInResult = await userApi.signIn({
        user_id: userId,
        user_password: password,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(signInResult);
    }
  };

  const text = textMap[type];
  console.log('result', userId, password, confirmPassword, email, text);
  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput
          onChange={onUserIdChange}
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          onChange={onPasswordChange}
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            onChange={onConfirmPasswordChange}
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}

        {type === 'register' && (
          <StyledInput
            onChange={onEmailChange}
            autoComplete="new-password"
            name="user_email"
            placeholder="이메일"
            // type="email"
          />
        )}
        {type === 'register' && (
          <ButtonWithMarginTOP cyan fullWidth onClick={signUp}>
            {text}
          </ButtonWithMarginTOP>
        )}
        {type === 'login' && (
          <ButtonWithMarginTOP cyan fullWidth onClick={signIn}>
            {text}
          </ButtonWithMarginTOP>
        )}
      </form>
      {
        <Footer>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      }
    </AuthFormWrapper>
  );
};

export default AuthForm;
