import React from 'react';
import Image from '../assets/images/image6.png';
import Image1 from '../assets/images/image7.png'
import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function SelectCards() {
    const [selectedRole, setSelectedRole] = useState(null);
  return (
       <>

<div className='bg-[#F5F5F5] w-445 -ml-70 h-205 -mt-10'>

      <span className='flex justify-center gap-100 pt-50 text-3xl'>

      <button
        onClick={() => setSelectedRole('tutor')}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {selectedRole === 'tutor' ? (
          <FaCheckCircle className="text-[#FF9899] text-2xl" />
        ) : (
          <FaRegCircle className="text-[#FF9899] text-2xl" />
        )}
        <span className="text-gray-800">Tutor</span>
      </button>
     

     {/* student */}
      <button
        onClick={() => setSelectedRole('student')}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {selectedRole === 'student' ? (
          <FaCheckCircle className="text-[#FF9899] text-2xl" />
        ) : (
          <FaRegCircle className="text-[#FF9899] text-2xl" />
        )}
        <span className="text-gray-800">Student</span>
      </button>

   

       </span>


 
 
         <div className=' flex gap-10 justify-center pt-0'>

        <div className='border-[#FF9899] border-4 w-100 h-100'> 
            <img src={Image} alt="teacher" />
         </div>

        <div className='border-[#FF9899] border-4 w-100 h-100'> 
            <img src={Image1} alt="student" width={340} className='pl-20' />
         </div>

         </div>
        
    </div>
    </>
  )
}

export default SelectCards