// src/utils/axios.tsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://resulting-roby-synrgy7-faza-1307d6b4.koyeb.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
