import React from 'react'
import Image1 from "../assets/images/image10.png";
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router';

function Payment() {
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
                    Course
                </th>
                <th scope="col" class="px-6 py-3 flex">
                    Duration <FcApproval />
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount charged
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment status
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    JavaScript
                </th>
                <td class="px-6 py-4">
                    3hrs
                </td>
                <td class="px-6 py-4">
                    100cedis
                </td>
                <td class="px-6 py-4">
                    Payment Released
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Science
                </th>
                <td class="px-6 py-4">
                   1 week 
                </td>
                <td class="px-6 py-4">
                    500cedis
                </td>
                <td class="px-6 py-4">
                    Payment on hold
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Python
                </th>
                <td class="px-6 py-4">
                   3 months
                </td>
                <td class="px-6 py-4">
                    $500
                </td>
                <td class="px-6 py-4">
                    Payment on hold
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

export default Payment