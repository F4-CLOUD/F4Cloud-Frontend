import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    //구현 예정
    const { user_id, user_password, confirm_user_password, user_email } = form;
    if (user_password !== confirm_user_password) {
      // TODO: 오류 처리
      return;
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
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      // dispatch(check());
    }
  }, [auth, authError]);
  //user 값 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
    }
  }, [user]);

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterForm;
