import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Both fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://edumatch-h6zs.onrender.com/api/users/login",
        { email, password }
      );

      // Log the entire response to check its structure
      console.log("Login successful:", response.data); // Log the full response

      // Check the structure of the response and see if role exists
      const userRole = response.data.role || response.data.user?.role;

      if (!userRole) {
        console.error("Role not found in the response data.");
        alert("Role not found. Please check the response.");
        return;
      }

      alert("Login successful!");

      console.log("User role:", userRole);

      if (userRole === "teacher") {
        console.log("Redirecting to /profile");
        navigate("/profile");
      } else if (userRole === "student") {
        console.log("Redirecting to /home-student");
        navigate("/home-student");
      } else {
        alert("Unrecognized role. Cannot redirect.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-[#FF9899] text-white flex justify-between mt-20">
      <div className="mt-10 ml-10">
        <h1 className="text-6xl">Welcome Back!</h1>
        <p className="text-2xl mt-15 gap-2">
          To keep connecting with us <br />
          please login with your personal info
        </p>

        <button className="flex text-3xl mt-5 ml-25 items-center gap-2">
          Login here
          <FaArrowRight />
        </button>
      </div>

      <form className="mr-10 w-[400px]" onSubmit={handleLogin}>
        <h1 className="text-4xl mb-6">Login with Google/email</h1>

        <a
          href="https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile"
          className="flex items-center justify-center gap-3 bg-white text-black font-medium py-2 px-4 rounded-lg transition duration-200 mb-6 hover:bg-gray-200"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </a>

        <label className="block mb-2 text-lg font-medium text-gray-700">
          Email (required)*
        </label>
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <CiMail />
          </span>
          <input
            type="email"
            placeholder="pearlsensory01@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <label className="block mb-2 text-lg font-medium text-gray-700">
          Your Password (required)*
        </label>
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <IoMdKey />
          </span>
          <input
            type="password"
            placeholder="Enter your key"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <p>Forgot your password?</p>
          <Link to="/resetpassword">
            <button
              type="button"
              className="bg-white text-orange-600 px-4 py-2 text-lg cursor-pointer rounded-lg hover:bg-orange-100 transition"
            >
              Reset your password
            </button>
          </Link>

          <button
            type="submit"
            className="border-2 border-white text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-white hover:text-orange-600 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
