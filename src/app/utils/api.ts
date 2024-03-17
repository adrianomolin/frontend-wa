import axios from 'axios';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

api.interceptors.request.use(config => {
  config.headers.set('demo', import.meta.env.VITE_IS_DEMO);

  return config;
});

api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');

    toast.error('Sessão expirada, faça login novamente');
  }
  return error;
});
