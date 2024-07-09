"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const handleGoogleSignIn = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white border p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
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
              id="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:brightness-105 active:bg-blue-600 transition-all duration-200"
          >
            Login
          </button>
        </form>

        <div className="text-end my-2">
          <span className="text-slate-500">
            Here to new ?{" "}
            <Link className="text-blue-500 hover:underline" href="/register">
              Register
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

export default LoginPage;
