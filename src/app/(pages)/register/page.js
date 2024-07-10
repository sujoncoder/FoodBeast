"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HANDLE FORM LOGIN SUBMIT
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("hit the register btn");

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("User registered successfully:", data);
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }
  };

  // HANDLE WITH GOOGLE SIGNIN
  const handleGoogleSignIn = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white border p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>

        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:brightness-105 active:bg-blue-600 transition-all duration-200"
          >
            Register
          </button>
        </form>

        <div className="text-end my-2">
          <span className="text-slate-500">
            Already account ? {}
            <Link className="text-blue-500 hover:underline" href="/login">
              Login
            </Link>
          </span>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 hover:brightness-105 active:bg-red-600 transition-all duration-200"
        >
          <FaGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
