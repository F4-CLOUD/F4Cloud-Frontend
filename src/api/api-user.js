import api from './api-base';

export const userApi = {
  signUp: ({ user_id, user_password, confirm_user_password, user_email }) =>
    api.post('/users/sign_up/', {
      user_id,
      user_password,
      confirm_user_password,
      user_email,
    }),
  signIn: ({ user_id, user_password }) =>
    api.post('/users/sign_in/', {
      user_id,
      user_password,
    }),
  verification: ({ user_id, code }) =>
    api.post('/users/confirm_sign_up/', {
      user_id,
      code,
    }),
};
