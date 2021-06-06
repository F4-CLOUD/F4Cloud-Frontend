import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';
import Button from '../common/Button';
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
  margin-bottom: 1rem;
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

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="user_id"
          name="user_id"
          placeholder="아이디"
          type="user_id"
          onChange={onChange}
          value={form.user_id}
        />
        <StyledInput
          autoComplete="user_password"
          name="user_password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.user_password}
        />
        {type === 'register' && (
          <div>
            <StyledInput
              autoComplete="confirm_user_password"
              name="confirm_user_password"
              placeholder="비밀번호 확인"
              type="confirm_user_password"
              onChange={onChange}
              value={form.confirm_user_password}
            />
            <StyledInput
              autoComplete="user_email"
              name="user_email"
              placeholder="이메일"
              type="user_email"
              onChange={onChange}
              value={form.user_email}
            />
          </div>
        )}

        <ButtonWithMarginTOP cyan fullWidth>
          {text}
        </ButtonWithMarginTOP>
      </form>
      <Footer>
        {type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}
      </Footer>
    </AuthFormWrapper>
  );
};

export default AuthForm;
