import React from 'react'
import Image1 from "../assets/images/image10.png";
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router';

function ApprovalSinglePage() {
  return (
    <div>
        <span className='flex'>
         <img src={Image1} alt="image" className='w-50 h-50 border-4 border-gray-600' />
         <h1 className='text-2xl text-gray-500'>April Eva <br /> English Tutor</h1>
         </span>
         

<div class="relative overflow-x-auto mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    File name
                </th>
                <th scope="col" class="px-6 py-3 flex">
                    Approve <FcApproval />
                </th>
                <th scope="col" class="px-6 py-3">
                    Reject
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Certificate"
                </th>
                <td class="px-6 py-4">
                    Approved
                </td>
                <td class="px-6 py-4">
                    
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CV
                </th>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4">
                    Rejected
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Resume
                </th>
                <td class="px-6 py-4">
                    Approved
                </td>
                <td class="px-6 py-4">
                    
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

<Link to="/admin-dashboard">
 <button className='p-3 w-20 bg-orange-600 text-white mt-20 cursor-pointer'>Back</button>
 </Link>

    </div>
  )
}

export default ApprovalSinglePage