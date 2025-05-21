import React from 'react'
import Image from '../assets/images/image10.png';
import { Link } from 'react-router';
import { BsPerson } from "react-icons/bs";

function EditProfileStudent() {
  return (

    <>
 
    <div className="flex items-center space-x-4 p-4">
      
      <div className="w-100 h-100 rounded-full overflow-hidden border border-gray-300">
        <img
          src={Image}
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
      

     
      <label className="p-3 w-30 cursor-pointer bg-[#FF9899] text-white rounded inline-block">
        Edit Profile
        <input
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
     <Link to="/student-dashboard" className='p-3 w-30 cursor-pointer rounded text-white bg-orange-400'>Cancel</Link>
     </div>

    <span className='flex '>
     <div className="w-100">
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
       
      </div>
   

      <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Educational Level</h2>

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Select Your Level
      </label>
      <select
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Select level</option>
        <option>Basic</option>
        <option>Intermediate</option>
        <option>Tertiary</option>
       
      </select>

      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
        Save
      </button>
    </div>
    </span>
      </>


 
  )
}

export default EditProfileStudent