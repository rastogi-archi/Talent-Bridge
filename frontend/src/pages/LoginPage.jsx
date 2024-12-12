import React from 'react'
import { useState } from 'react';
import { EyeOff, Eye, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:5000/api/auth/login", formData)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  };
  return (
    <div className='h-screen flex justify-center items-center md:gap-10 flex-col md:flex-row mb-20 sm:mb-0'>
      {/* left */}
      <div className='flex justify-center items-center'>
        <img src="\loginSignup.png" alt="login" className="sm:h-[450px] w-full sm:w-auto" />
      </div>
      {/* right */}
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-[#1988ab] md:text-5xl text-4xl font-medium'>Welcome!</h2>
        <p className='text-[#1988ab] md:text-xl text-base mb-4'>Sign in to your account</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* username Input */}
          <div className="form-control">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <User className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                type="text"
                className="w-full pl-12 border-2 border-gray-300 rounded-lg h-10 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a5963]"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Lock className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 border-2 border-gray-300 rounded-lg h-10 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a5963]"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-base-content/40" />
                ) : (
                  <Eye className="h-5 w-5 text-base-content/40" />
                )}
              </button>
            </div>
          </div>
          {/* <button type="submit" className="btn bg-[#d668cd] w-full">
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Sign in"
            )}
          </button> */}
          <button type="submit">Login</button>
        </form>

        <div className="text-center mt-2">
          <p className="text-sm text-[#3a5963]">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="link text-[#1988ab]">
              Create account
            </Link>
          </p>
        </div>
        <p className='uppercase text-xs mt-5 text-[#3a5963] ml-3'>or login with</p>
        <div className='flex mt-2'>
          <img src="\fb.png" alt="" className='h-9' />
          <img src="\google.png" alt="" className='h-9' />
          <img src="\linkedin.webp" alt="" className='h-9 ml-3' />
        </div>
      </div>
    </div >
  )
}

export default LoginPage
