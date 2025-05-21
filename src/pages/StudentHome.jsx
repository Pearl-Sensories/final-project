import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdFavoriteBorder } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import BottomNavbar from './BottomNavbar';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router';

function AvatarPlaceholder() {
  return (

    

      <div className='bg-[#F5F5F5]'>

     <div className='border-b border-gray-500'>

      <span className='flex justify-between ml-10'>
    <div className='flex mt-30 '>

    <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
      <FaUser className="text-gray-600 text-4xl" />
    </div>

    <h1 className='flex text-2xl ml-5'>Pearl Sensory </h1>
   
    <h1 className='flex mt-30 -ml-80 text-xl'> $15</h1>
    <h1 className='flex mt-23 ml-30 text-xl'>5* <br /> 17 reviews</h1>
   

    </div>

   
    <img src={Logo} alt="" className='w-20 h-15 -ml-109' />
   

    <div className="w-full max-w-md mx-auto mt-5">
     
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search something..."
        className="w-70 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
      />
      <button className='bg-orange-600 p-3 text-white ml-3 cursor-pointer'>Search</button>
    </div>

    </span>

    <h1 className='text-xl mt-5 -ml-160'>About: Certified & charismatic tutor with 15 years of experience</h1>

     <span className='flex mt-5 gap-5'>
    <PiStudentFill /> <p>32 students . 2472 lessons</p>
    </span>

    <span className='flex mt-5 gap-5'>
    <TbMessages /> <p>Speaks English (Native), +1</p>
    </span>

    <Link to="/booking">
    <button className='bg-orange-500 text-white p-3 w-30 rounded-2xl cursor-pointer'>Book Tutor</button>
    </Link>
  

    <BottomNavbar/>

    </div>
    </div>
  );
}

export default AvatarPlaceholder;
