import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdFavoriteBorder } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import Logo from '../assets/images/logo.png';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


function CompleteCourse() {
  return (
    <div>
             <div className='bg-[#F5F5F5] h-[100vh]'>
        
             <div className='border-b border-gray-500'>
        
              <span className='flex justify-between ml-10'>
            <div className='flex mt-30 '>
        
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
              <FaUser className="text-gray-600 text-4xl" />
            </div>
        
            <h1 className='flex text-2xl ml-5'>Pearl Sensory </h1>

                <label className="cursor-pointer inline-block ml-10">
      <input type="checkbox" className="peer hidden" />

      {/* Outlined Heart (unfavorited) */}
      <AiOutlineHeart className="text-3xl text-gray-500 peer-checked:hidden transition hover:text-red-400" />

      {/* Filled Heart (favorited) */}
      <AiFillHeart className="text-3xl text-[#FF9899] hidden peer-checked:inline transition hover:text-red-400" />
    </label>
            <h1 className='flex mt-30 -ml-80 text-xl'> $15</h1>
            <h1 className='flex mt-23 ml-30 text-xl'>5* <br /> 17 reviews</h1>
        
            </div>
        
             <Link to="/student-dashboard">
            <IoMdCloseCircle className='text-4xl text-gray-600 -ml-100' />
            </Link>
           
            <img src={Logo} alt="" className='w-20 h-15 -ml-109' />
           
        
         
        
            </span>
        
            <h1 className='text-xl mt-5 -ml-160'>About: Certified & charismatic tutor with 15 years of experience</h1>
        
             <span className='flex mt-5 gap-5'>
            <PiStudentFill /> <p>32 students . 2472 lessons</p>
            </span>
        
            <span className='flex mt-5 gap-5'>
            <TbMessages /> <p>Speaks English (Native), +1</p>
            </span>

 
             <span className='flex justify-center gap-20'>
            <button className='p-3 w-35 bg-orange-600 text-white rounded-xl ml-70 mb-5'>Mark Completed</button>

            <div className="flex flex-col items-center ">
      <p className="mb-3 text-lg font-medium text-gray-700">Rate your experience:</p>

      <div className="flex flex-row-reverse justify-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={star}
              className="peer hidden"
            />
            <FaStar
              className="
                text-3xl text-gray-300 
                peer-checked:text-yellow-400 
                hover:text-yellow-500 
                transition duration-200
              "
            />
          </label>
        )).reverse()}
      </div>
    </div>
    </span>
    </div>
    </div>
    </div>
  )
}

export default CompleteCourse