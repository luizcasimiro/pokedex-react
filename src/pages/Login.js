import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const navigate = useNavigate();

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(email));
    navigate('/home');
  };

  useEffect(() => {
    const verifyEmail = () => {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return validEmail.test(email);
    };

    const verifyPassword = () => {
      const MIN_LEN_PASS = 6;
      return password.length >= MIN_LEN_PASS;
    };

    const handleLoginDisable = () => {
      if (verifyEmail() && verifyPassword()) {
        setLoginDisabled(false);
        return;
      }
      setLoginDisabled(true);
    };

    handleLoginDisable();
  }, [email, password]);

  return (
    <div>

      <h1 className='flex justify-center mt-32 mb-12 text-3xl uppercase font-bold text-blue-800'>
        Pokédex
      </h1>

      <div className='flex justify-center my-4'>
        <input
          className='border border-blue-800 rounded-md'
          type="email"
          placeholder="email"
          onChange={handleEmail}
        />
      </div>

      <div className='flex justify-center my-4'>
        <input
          className='border border-blue-800 rounded-md'
          type="password"
          placeholder="password"
          onChange={handlePassword}
        />
      </div>

      <div className='flex justify-center mt-14'>
        <button
          className='border border-blue-800 bg-blue-700 uppercase text-white rounded-md py-2 px-4 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 font-bold'
          type="button"
          disabled={loginDisabled}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default Login;
