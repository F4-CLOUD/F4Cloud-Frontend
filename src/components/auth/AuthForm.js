import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import palette from '../../styles/palette';
import Button from '../common/Button';
import { userApi } from '../../api/api-user';
import { isSetAccessorDeclaration } from 'typescript';
import RegisterModal from '../../components/modal/RegisterModal';
import LoginModal from '../../components/modal/LoginModal';
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
  const [verificationCode, setVerificationCode] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [flagVerificate, setFlagVerificate] = useState(false);
  const [flagLogin, setFlagLogin] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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

  const onVerificationCodeChange = (e) => {
    console.log('verificationCode', e.target.value);
    setVerificationCode(e.target.value);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
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
      if (signUpResult.status === 201) {
        setConfirm(true);
      }
    }
  };

  const verification = async () => {
    event.preventDefault();
    let verificationResult = null;

    try {
      console.log(userId);
      console.log(verificationCode);
      verificationResult = await userApi.verification({
        user_id: userId,
        code: verificationCode,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(verificationResult);
      if (verificationResult.status === 200) {
        setVerificationCode(true);
        setFlagVerificate(true);
        openRegisterModal();
      }
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
      if (signInResult.status === 200) {
        setFlagLogin(true);
        openLoginModal();
      }
    }
  };

  const text = textMap[type];
  console.log('result', userId, password, confirmPassword, email, text);

  if (flagVerificate) {
    return (
      <React.Fragment>
        <RegisterModal open={registerModalOpen} close={closeRegisterModal} header="환영합니다!">
          성공적으로 회원가입이 되었습니다.
        </RegisterModal>
      </React.Fragment>
    );
  }

  if (flagLogin) {
    return (
      <React.Fragment>
        <LoginModal open={loginModalOpen} close={closeLoginModal} header="환영합니다!">
          로그인 되었습니다.
        </LoginModal>
      </React.Fragment>
    );
  }

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
            autoComplete="email"
            name="email"
            placeholder="이메일"
            // type="email"
          />
        )}
        {confirm ? (
          <>
            {' '}
            <StyledInput
              onChange={onVerificationCodeChange}
              autoComplete="verificationcode"
              name="verificationcode"
              placeholder="인증번호"
            />{' '}
            <ButtonWithMarginTOP cyan onClick={verification}>
              확인
            </ButtonWithMarginTOP>
          </>
        ) : null}
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
