import { localStorageKeys } from '@app/config/localStorageKeys';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  headers: {
    'Content-Type': 'application/json',
  }
});


httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


httpClient.interceptors.request.use(config => {
  config.headers.set('demo', import.meta.env.VITE_IS_DEMO);

  return config;
});
