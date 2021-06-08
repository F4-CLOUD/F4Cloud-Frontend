import client from './client';

//로그인
export const login = ({ user_id, user_password }) =>
  client.post('/users/sign_in/', { user_id, user_password });
//   client.post('/api/auth/login', { username, password });

//회원가입
export const register = ({ user_id, user_password, confirm_user_password, user_email }) =>
  client.post('/users/sign_up/', { user_id, user_password, confirm_user_password, user_email });
//   client.post('/api/auth/register', { username, password });

//로그인 상태 확인
// export const check = () => client.get('api/auth/check');
