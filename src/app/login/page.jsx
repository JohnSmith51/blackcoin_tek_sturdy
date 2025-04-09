"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaApple, FaEye, FaGoogle, FaRegEyeSlash } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      console.log("Form submitted successfully");
      router.push('/dashboard')
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="hidden relative md:flex w-1/2 bg-gray-100">
        <img className="absolute top-20 left-40" src="/asset/images/logo.png" alt="Login" />
        <img className="w-full h-full object-cover" src="/asset/images/loginimage.png" alt="Login" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full relative md:w-1/2 flex flex-col justify-center items-center p-6">
        <img className="absolute top-0 right-0" src="/asset/images/left.png" alt="" />

        <div className="w-full z-10 max-w-md bg-white p-8 box rounded-lg">
          <h2 className="text-2xl hFont font-extrabold mb-6 text-center">SIGN IN TO YOUR ACCOUNT</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
                className="w-full mt-1 px-4 py-2 border border-gray-300 outline-none rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                className="w-full mt-1 px-4 py-2 border rounded-lg border-gray-300 outline-none pr-10"
              />
              <button
                type="button"
                className="absolute cursor-pointer top-4 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={20} /> : <FaRegEyeSlash size={20} />}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex mb-4 text-sm justify-between items-center">
              <p>Don’t have an account?</p>
              <p onClick={()=>{router.push('/signup')}} className="text-primary cursor-pointer">Sign Up</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full primary text-white py-2 rounded-lg cursor-pointer transition duration-200"
            >
              Login
            </button>
            
            <div className="flex py-4 items-center">
              <div className="border-b w-full"></div>
              <p className="font-semibold mx-4">OR</p>
              <div className="border-b w-full"></div>
            </div>

            <div className="flex gap-2 justify-center">
              <div className="rounded-full primary w-10 h-10 flex justify-center items-center">
                <FaGoogle className="text-white text-2xl" />
              </div>
              <div className="rounded-full primary w-10 h-10 flex justify-center items-center">
                <FaApple className="text-white text-2xl" />
              </div>
            </div>
          </form>
        </div>

        <img className="absolute bottom-0 left-[-16rem]" src="/asset/images/right.png" alt="" />
      </div>
    </div>
  );
};

export default Page;
