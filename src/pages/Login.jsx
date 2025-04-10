import React from "react";
import { CiMail } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function Login() {
  return (
    <div className="p-6 w-full mx-auto bg-[#FF9899] text-white flex justify-between mt-20">
      <div className="mt-10 ml-10">
        <h1 className="text-6xl">Welcome Back!</h1>
        <p className="text-2xl mt-15 gap-2">To keep connecting with us <br />
         please login with your personal info</p>

         <button className="flex text-3xl mt-5 ml-25">Login here<FaArrowRight /></button>
      </div>

      <form className="mr-10">
        <h1 className="text-4xl">Login</h1>

        <label className="block mb-2 text-lg font-medium text-gray-700 mt-10">
          Email (required)*
        </label>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <CiMail />
          </span>
          <input
            type="text"
            placeholder="pearlsensory01@gmail.com"
            className="pl-10 pr-4 py-2 w-100 border border-gray-300
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <label className="block mb-2 text-lg font-medium text-gray-700">
          Your Password (required)*
        </label>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <IoMdKey />
          </span>

          <input
            type="text"
            placeholder="Enter your key"
            className="pl-10 pr-4 py-2 w-100 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <span className="flex flex-col gap-10 mt-10">
          <button className="bg-white text-orange-600 w-70 ml-15 p-2 text-lg cursor-pointer">
            Forgot your password?
          </button>

          <button className="border-2 border-white text-white p-5 w-50 ml-25 rounded-4xl cursor-pointer">
            Login
          </button>
        </span>
      </form>
    </div>
  );
}

export default Login;
