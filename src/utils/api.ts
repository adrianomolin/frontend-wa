import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://waiterapp-api-34ro.onrender.com',
});

api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');

    window.location.reload();
  }
  return error;
});
