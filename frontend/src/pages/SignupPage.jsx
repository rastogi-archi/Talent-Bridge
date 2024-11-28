import React from 'react'
import { useState } from 'react';
import { EyeOff, Eye, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
  };
  return (
    <div className='h-screen flex justify-center gap-16 flex-col md:flex-row'>
      {/* left */}
      <div className='flex justify-center items-center'>
        <img src="\public\login.jpeg" alt="login" className='h-96' />
      </div>
      {/* right */}
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-[#d668cd] md:text-5xl text-4xl font-medium mb-4'>Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* username input */}
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
          {/* Email Input */}
          <div className="form-control">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Mail className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                type="email"
                className="w-full pl-12 border-2 border-gray-300 rounded-lg h-10 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a5963]"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          {/* <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
            {isSigningUp ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </button> */}
        </form>

        <div className="text-center mt-2">
          <p className="text-sm text-[#3a5963]">
            Already have an account?{" "}
            <Link to="/login" className="link text-[#d668cd]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div >
  )
}

export default SignupPage
