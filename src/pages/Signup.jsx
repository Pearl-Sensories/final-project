import React from "react";
import { BsPerson } from "react-icons/bs";
import { IoMdKey } from "react-icons/io";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdPhoneForwarded } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router";
import { CiMail } from "react-icons/ci";

function Signup() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <form>
        <h1 className="text-4xl font-bold mb-2">Create Account</h1>
        <p className="mb-6 text-gray-600">Use your email for registration</p>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Full Name (required)*
        </label>

        <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <BsPerson />
          </span>
        <input
          type="text"
          placeholder="Pearl Sensory"
          className="pl-10 pr-4 py-2 w-full border border-gray-300
           rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
           required
        />
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Email (required)*
        </label>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <CiMail />
          </span>
          <input
            type="text"
            placeholder="pearlsensory01@gmail.com"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 
            rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Password (required)*
        </label>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <IoMdKey />
          </span>
          <input
            type="text"
            placeholder="strong password"
            className="pl-10 pr-4 py-2 w-full border border-gray-300
             rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
             required
          />
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Confirm Password (required)*
        </label>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <IoMdKey />
          </span>
          <input
            type="text"
            placeholder="......."
            className="pl-10 pr-4 py-2 w-full border border-gray-300
             rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
             required
          />
        </div>

        <label className="inline-flex items-center space-x-2 mt-10">
  <input 
    type="checkbox" 
    required
    className="form-checkbox h-5 w-5 text-black
     bg-orange-600 rounded focus:ring-orange-600 focus:ring-2"
  />
  <span className="text-gray-700 text-sm">I agree to the <Link to="<terms/>" className="text-orange-600">terms and conditions</Link>
  </span>
</label>


<button className="ml-10 bg-orange-600 p-5 rounded-2xl cursor-pointer">
    SignUp
</button>



      </form>
    </div>
  );
}

export default Signup;
