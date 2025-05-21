import React from 'react'
import { FaUser } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router';

function FavouriteLists() {
  return (
    <div>
              <div className='bg-[#F5F5F5] h-[100vh]'>
        
             <div className='border-b border-gray-500'>
        
              <span className='flex justify-between ml-10'>
            <div className='flex mt-30 '>
        
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
              <FaUser className="text-gray-600 text-4xl" />
            </div>
        
            <h1 className='flex text-2xl ml-5'>Pearl Sensory</h1>
            <h1 className='flex mt-30 -ml-80 text-xl'> $15</h1>
            <h1 className='flex mt-23 ml-30 text-xl'>5* <br /> 17 reviews</h1>
        
            </div>
        
           
           <Link to="/student-dashboard">
            <img src={Logo} alt="" className='w-20 h-15 flex justify-end mr-50' />
            </Link>
           
           
        
            </span>
        
            <h1 className='text-xl mt-5 -ml-160'>About: Certified & charismatic tutor with 15 years of experience</h1>
        
             <span className='flex mt-5 gap-5'>
            <PiStudentFill /> <p>32 students . 2472 lessons</p>
            </span>
        
            <span className='flex mt-5 gap-5'>
            <TbMessages /> <p>Speaks English (Native), +1</p>
            </span>

            <label className="cursor-pointer inline-block relative">
      {/* Hidden checkbox, checked by default */}
      <input
        type="checkbox"
        className="peer hidden"
        defaultChecked
      />

         {/* Filled heart (visible when checked) */}
         <AiFillHeart className="peer-checked:inline-block hidden text-3xl text-[#FF9899] transition" />

     {/* Outlined heart (visible when unchecked) */}
     <AiOutlineHeart className="peer-checked:hidden inline-block text-3xl text-gray-500 transition" />
    </label>
    </div>
    </div>
    </div>
  )
}

export default FavouriteLists