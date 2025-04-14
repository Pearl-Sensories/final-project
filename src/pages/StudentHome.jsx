import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdFavoriteBorder } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";

function AvatarPlaceholder() {
  return (
     <div className='border-b border-gray-500'>
    <div className='flex'>

    <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
      <FaUser className="text-gray-600 text-4xl" />
    </div>

    <h1 className='flex text-2xl ml-5'>Pearl Sensory <MdFavoriteBorder className='ml-40 text-2xl'/></h1>
    <h1 className='flex mt-30 -ml-80 text-xl'> $15</h1>
    <h1 className='flex mt-23 ml-30 text-xl'>5* <br /> 17 reviews</h1>

    </div>

    <h1 className='text-xl mt-5 -ml-160'>About: Certified & charismatic tutor with 15 years of experience</h1>

     <span className='flex mt-5 gap-5'>
    <PiStudentFill /> <p>32 students . 2472 lessons</p>
    </span>

    <span className='flex mt-5 gap-5'>
    <TbMessages /> <p>Speaks English (Native), +1</p>
    </span>

    </div>
  );
}

export default AvatarPlaceholder;
