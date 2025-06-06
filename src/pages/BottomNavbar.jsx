import React from 'react'
import { IoHome } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSchedule } from "react-icons/md";
import { Link } from 'react-router';

function BottomNavbar() {
  return (
    <div className='flex text-3xl justify-between text-[#FF9899] mt-120 border-2 border-gray-500
    '>
        <Link to="/home-student">
        <IoHome className='cursor-pointer' />
        </Link>

        <Link to="/message">
        <AiOutlineMessage className='cursor-pointer' />
        </Link>

        <Link to="/student-dashboard">
        <RxDashboard  className='cursor-pointer' />
        </Link>

        <Link to="/lessons">
        <MdOutlineSchedule className='cursor-pointer'/>
        </Link>
    </div>
  )
}

export default BottomNavbar