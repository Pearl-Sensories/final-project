import React from 'react'
import { BsPerson } from "react-icons/bs";

function StudentProfile() {
  return (
    <div>
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Edit Profile Image</h2>

      <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-gray-600 text-3xl border-4 border-gray-400">
        IMG
      </div>

     
      <label className="block w-full">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </label>
    </div>

    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-md w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>

      <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-gray-600 text-3xl border-4 border-gray-400 rounded-full">
        IMG
      </div>

      <label className="block w-full">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </label>

      {/* Change Username Section */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-700">Change Username</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <BsPerson />
          </span>
          <input
            type="text"
            placeholder="Enter new username"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Edit
        </button>
      </div>

      {/* Change Educational Level Section */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-700">Change Educational Level</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
          focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select level</option>
          <option>High School</option>
          <option>Undergraduate</option>
          <option>Graduate</option>
          <option>Post-Graduate</option>
          <option>Other</option>
        </select>
        <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Edit
        </button>
      </div>
    </div>
    </div>
  )
}

export default StudentProfile