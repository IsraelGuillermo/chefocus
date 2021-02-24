import axios from 'axios';

export function login(user) {
  return axios.post('/api/auth/login', user);
}

export function signupUser(user) {
  return axios.post('/api/auth/signup', user);
}
