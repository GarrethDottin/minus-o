import request from './request';

export function loginUser(credentials) {
  return Promise.resolve({ email: credentials.email, token: 'jwtToken' });
  return request.post('/api/auth/login', credentials)
    .then(({ data }) => data);
}

export default { loginUser };
