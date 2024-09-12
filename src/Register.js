import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");  

  const registerUser = async () => { 
   
    console.log(email, password);
    try {
          await axios.post("http://localhost:5000/register", 
          new URLSearchParams({
              email: email,
              password: password
          }), 
          {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              withCredentials: true,
          }
      );
      window.location.href = "/";
  } catch (error) {
      if (error.response?.status === 401) {
        alert("Invalid credentials");
      } 
    } 
  };

  return (
    <div className='w-full h-screen flex bg-neutral-600 justify-center items-center'>
      <div className='bg-zinc-200 w-6/12 rounded-2xl py-10 drop-shadow-2xl'>
        <div className='flex'>
          <h1 className='text-black px-8 font-black text-3xl'>Heat</h1>
        </div>
        <h4 className='text-center font-black'>Register your new account</h4>
        <form  onSubmit={(e) => { e.preventDefault(); registerUser(); }}>
          <div className='text-black flex flex-col space-y-6 items-center text-center'>
            <label className='text-center' htmlFor="email">Email</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 pl-2' 
              type='email' 
              id='email' 
              value={email}  
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 pl-2' 
              type='password' 
              id='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='w-4/12 bg-transparent border-2 border-zinc-50 rounded-xl transition ease-in-out delay-150'
              type='submit'
              value='Register' 
              id='button' 
              onClick={(e) => registerUser(e)}
            />
          </div>
        </form>
      </div>
    </div>  
  );
};

export default Register;
