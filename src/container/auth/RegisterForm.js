import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthFormJ';
// import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: auth.user,
  }));
  //input 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };
  //폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { user_id, user_password, confirm_user_password, user_email } = form;
    if ([user_id, user_password, confirm_user_password, user_email].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    if (user_password !== confirm_user_password) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'user_password', value: '' }));
      dispatch(changeField({ form: 'register', key: 'confirm_user_password', value: '' }));
    }
    dispatch(register({ user_id, user_password, confirm_user_password, user_email }));
  };

  //컴포넌트가 처음 렌더링될 때 for을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공 실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      //계정명 이미 존재할 때
      // if (authError.response === 400) {
      //   setError('이미 존재하는 계정명입니다.');
      //   return;
      // }
      //기타이유
      setError('회원가입 실패: 계정이 이미 존재하거나 비밀번호가 일치하는지 확인하십시오. ');
      return;
    }
    if (auth !== null) {
      console.log('회원가입 성공');
      console.log(auth);
      history.push('/'); // 홈 화면 이동
      // dispatch(check());
    }
  }, [auth, authError]);
  //user 값 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      console.log('회원가입 성공');
      console.log(user);
      history.push('/'); // 홈 화면 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
  );
};

export default withRouter(RegisterForm);
