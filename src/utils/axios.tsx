// src/utils/axios.tsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/api/v1/',
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