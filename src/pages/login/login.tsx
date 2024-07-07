import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import axiosInstance from '../../utils/axios';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axiosInstance.post('api/v1/login', { email, password });
      login(response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError('Invalid email or password');
    }
  };

  const onSuccess = async (res: any) => {
    try {
      const response = await axios.post('http://localhost:6543/api/v1/auth/google', { token: res.credential }, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      login(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  const onFailure = () => {
    console.log('Login failed', error);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center">
        <div className='h-screen bg-[#0D28A6] w-[65%]'>
          <img src="https://s3-alpha-sig.figma.com/img/293b/474b/7604a9eda79ef119b2c8196e3c8773d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZruzI4CSEcx324LrHLxL1JD2LlihqSAxxUMHAA8P3meQVm-0rokSvp1361A25U3t-pHZKD0uBO329DYqEcTD7KicatBE3Gjz-UQiHWtwh~tH6zCxERcQoNtVwET8w7lyZlRV8VOfe2zh2xZZMnzP35RsAIxZbL5WKkdhkcgRysukDkYMf5eAaIVAmvYgE49QyhPhQOS9L3r6Ssz97A6kWP9y3PLMJvdTrS0uePcWL8GJMrYRXSgmecu~ur9MkMp1ctKvPlTqnEKX3LUARRWlO9lEfcM5aWDUcbpxq7URZd6dCvlsARHTVtaNrMz0cz~jycrX3rDbk1JoubMkmjn~NQ__"
            alt="login-pic" className='h-screen opacity-60' />
        </div>
        <div className="w-[35%] px-16 py-[15%]">
          <form onSubmit={handleSubmit}>
            <h2 className='text-[24px] font-bold mb-6'>Welcome, Admin BCR</h2>
            <div className="mb-4">
              <label className="block text-black-300 text-sm mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Contoh: johndee@gmail.com'
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-black-300 text-sm mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='6+ karakter'
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="flex items-center justify-between w-full">
              <button
                type="submit"
                className="bg-[#0D28A6] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
          <div className='py-5 flex flex-col gap-3'>
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onFailure}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
