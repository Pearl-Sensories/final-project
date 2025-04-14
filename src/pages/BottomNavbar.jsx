import React from 'react'
import { IoHome } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";

function BottomNavbar() {
  return (
    <div className='flex text-3xl justify-between text-[#FF9899] mt-120 border-2 border-gray-500
    '>
        <IoHome className='cursor-pointer' />
        <AiOutlineMessage className='cursor-pointer' />
        <CgProfile className='cursor-pointer' />
        <RxDashboard className='cursor-pointer'/>
    </div>
  )
}

export default BottomNavbar