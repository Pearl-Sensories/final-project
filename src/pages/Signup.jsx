import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoMdKey } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password or Email do not match!");
      return;
    }

    if (!username || !email || !password || !role) {
      alert("All fields are required.");
      return;
    }

    const userData = {
      username: username.trim(),
      email,
      password,
      confirmPassword,
      role,
    };

    try {
      await axios.post(
        "https://edumatch-h6zs.onrender.com/api/users/register",
        userData
      );
      alert("Registration successful!");
      navigate("/login"); // Redirect after successful signup
    } catch (err) {
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="mb-6 text-center">
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          Sign up with Google
        </a>
        <p className="text-sm text-gray-500 mt-2">or use your email</p>
      </div>

      <form onSubmit={handleSubmit}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Oheneba Opare"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="omariohene98@gmail.com"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <label className="inline-flex items-center space-x-2 mt-6">
          <input
            type="checkbox"
            required
            className="form-checkbox h-5 w-5 text-black bg-orange-600 rounded focus:ring-orange-600 focus:ring-2"
          />
          <span className="text-gray-700 text-sm">
            I agree to the{" "}
            <Link to="/terms" className="text-orange-600 underline">
              terms and conditions
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="ml-10 mt-6 bg-orange-600 text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-orange-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
