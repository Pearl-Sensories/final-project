import React from 'react'
import { Link } from 'react-router'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { AiTwotoneSchedule } from "react-icons/ai";
import { GrFormSchedule } from "react-icons/gr";
import { GrSchedule } from "react-icons/gr";
import { HiComputerDesktop } from "react-icons/hi2";

function SubmittedForm() {
  return (
    <div>
         <section className='text-3xl flex justify-between border-b border-gray-300'>
                    <IoMdSettings className=' text-[#FF9899] ' />
                    <h1 className='text-gray-700'>Lessons</h1>
                    <RiCalendarScheduleFill className='text-[#FF9899]'/>
                </section>
        
                <div className='flex justify-between text-2xl mt-0 bg-[#FF9899] text-white
                 '>
                    <Link to="/lessons" className=' hover:bg-orange-400 cursor-pointer'><IoMdTime className='ml-10' />Upcoming</Link>
                    <Link to="/lessons/unsubmitted" className='hover:bg-orange-400 cursor-pointer'><GrFormSchedule 
                    className='ml-10 ' />Unsubmitted</Link>
                    <button className='hover:bg-orange-400 cursor-pointer'><AiTwotoneSchedule
                     className='ml-10 '/>Submitted</button>
                </div>
        
                <h1 className='flex text-2xl text-gray-700 bg-[#F5F5F5]'>TODAY</h1>
        
                <div className='flex justify-between text-xl text-gray-700 border-b-2 border-gray-500'>
                <h1><GrSchedule />Jesse T. | JavaScript <br /> 11:00 AM 1hr-lesson</h1>
                <h1><HiComputerDesktop />Online Lesson</h1>
                </div>

                <BottomNavbar/>
    </div>
  )
}

export default SubmittedForm