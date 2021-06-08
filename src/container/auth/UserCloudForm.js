// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeField, initializeForm, login } from '../../modules/auth';
// import AuthForm from '../../components/auth/AuthFormJ';
// import { withRouter } from 'react-router-dom';

// const LoginForm = ({ history }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState(null);
//   const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
//     form: auth.login,
//     auth: auth.auth,
//     authError: auth.authError,
//     user: auth.user,
//   }));
//   //input 변경 이벤트 핸들러
//   const onChange = (e) => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: 'login',
//         key: name,
//         value,
//       }),
//     );
//   };
//   //폼 등록 이벤트 핸들러
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { user_id, user_password } = form;
//     dispatch(login({ user_id, user_password }));
//   };

//   //컴포넌트가 처음 렌더링될 때 for을 초기화함
//   useEffect(() => {
//     dispatch(initializeForm('login'));
//   }, [dispatch]);
//   useEffect(() => {
//     if (authError) {
//       console.log('오류 발생');
//       console.log(authError);
//       setError('로그인 실패');
//       return;
//     }
//     if (auth) {
//       console.log('로그인 성공');
//       console.log(auth);
//       history.push('/@test'); // 클라우드 화면 이동
//       console.log(user);
//       // dispatch(check());
//     }
//   }, [auth, authError, dispatch]);
//   //user 값 잘 설정되었는지 확인
//   useEffect(() => {
//     if (user) {
//       console.log('LOGIN 성공');
//       console.log(user);
//       history.push('/@test'); // 홈 화면 이동
//       try {
//         localStorage.setItem('user', JSON.stringify(user));
//       } catch (e) {
//         console.log('localStorage is not working');
//       }
//     }
//   }, [history, user]);
//   return (
//     <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
//   );
// };

// export default withRouter(LoginForm);
