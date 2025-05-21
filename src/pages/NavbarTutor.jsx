import React from 'react'
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSchedule } from "react-icons/md";
import { Link } from 'react-router';

function NavbarTutor() {
  return (
    <div className='flex text-3xl justify-between text-[#FF9899] mt-120 border-2 border-gray-500
    '>
        
        <Link to="/profile-edit">
        <CgProfile className='cursor-pointer' />
        </Link>
        <Link to="/profile">
        <RxDashboard  className='cursor-pointer' />
        </Link>
        <Link to="/lessons-tutor">
        <MdOutlineSchedule className='cursor-pointer'/>
        </Link>
    </div>
  )
}

export default NavbarTutor;