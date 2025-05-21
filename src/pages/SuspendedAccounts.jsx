"use client";
import React from 'react'
import { FcApproval } from "react-icons/fc";
import { GiSuspensionBridge } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { Link } from 'react-router';
import Image from '../assets/images/logo.png';
import Image1 from '../assets/images/image10.png';
import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    SidebarLogo,
  } from "flowbite-react";

function SuspendedAccounts() {
  return (

    <div>
         <div className="relative bg-[#ece7e7] w-450 h-220 -ml-75 -mt-10">
         <div className="absolute top-1/2 left-1/2 w-350 h-180 bg-[#ddd6d6] -translate-x-1/2 -translate-y-1/2">
         <div className="bg-white w-260 h-180  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex ">

             <Sidebar className="text-[#FF9899]">
         
                       <SidebarLogo href="#" img={Image} imgAlt=" logo" >
                         Edumatch
                       </SidebarLogo>
         
         
                       <SidebarItems>
                         <SidebarItemGroup>
                            <Link to="/admin-dashboard">
                           <SidebarItem href="#" icon={FcApproval } >
                             Approval Requests
                           </SidebarItem>
                           </Link>
         
                          
                          <Link to='/home-student'>
                           <SidebarItem href="#" icon={GiSuspensionBridge}>
                             Suspended Accounts
                           </SidebarItem>
                           </Link>
         
                           
                           <Link to="/paymentid">
                           <SidebarItem href="#" icon={MdPayment}>
                             Payment Approvals
                           </SidebarItem>
                           </Link>
         
                         </SidebarItemGroup>
                       </SidebarItems>
                     </Sidebar>

         <h1 className='text-gray-500 text-3xl ml-60'>SUSPENDED ACCOUNTS</h1>

         <div className='flex gap-20 mt-30 -ml-100'>

            <span>
            <Link to='/single-page'>
         <img src={Image1} alt="image" className='w-50 h-50 border-4 border-gray-600' />
         </Link>
         <button className='bg-[#6ccc2c] text-white p-3 w-50 mt-5 rounded-xl'>Release Account</button>
         </span>

         <span>
         <img src={Image1} alt="image" className='w-50 h-50 border-4 border-gray-600' />
         <button className='bg-[#6ccc2c] text-white p-3 w-50 mt-5 rounded-xl'>Release Account</button>
         </span>
         </div>


         </div>
         </div>
         </div>
    </div>
  )
}



export default SuspendedAccounts;