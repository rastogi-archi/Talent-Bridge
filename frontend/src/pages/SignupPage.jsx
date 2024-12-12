import React, { useState } from 'react';
import { EyeOff, Eye, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.username.trim()) return toast.error("Username is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success) {
      axios.post("http://localhost:5000/api/auth/signup", formData)
      .then((res) => {
        console.log(res.data)
      }).catch(err => {
        console.log(err.response)
      })
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center md:space-x-10 px-4 items-center mb-20 sm:mb-0">
      {/* Left */}
      <div className="flex justify-center items-center">
        <img src="\loginSignup.png" alt="login" className="sm:h-[450px] w-full sm:w-auto" />
      </div>
      
      {/* Right */}
      <div className="flex justify-center items-center flex-col w-full sm:w-auto">
        <h2 className="text-[#1988ab] text-4xl sm:text-5xl font-medium mb-4">Create Account</h2>

        <form className="space-y-4 w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Username Input */}
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

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-[#1988ab] text-white hover:bg-[#1f7894] focus:outline-none"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-[#3a5963]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1988ab]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
