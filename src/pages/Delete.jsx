import React from 'react'
import { Link } from 'react-router'

function Delete() {
  return (
    <div className='bg-[#F5F5F5] w-400 h-200 -ml-50'>

        <div className='bg-white border-2 w-120 h-100 rounded-2xl ml-130 flex flex-col justify-between '>
        <h1 className='text-2xl mt-3'>Delete Account</h1>
        <h1 className='text-red-600 text-xl'>WARNING this is permanent and <br /> cannot be undone!</h1>

        <p className='text-xl'>All of your cards will be immediately deleted <br />Any cards you have created that have been <br /> shared with others will also be deleted. </p>

        <span className='flex justify-center gap-5 mb-5'>
        <Link to="/student-dashboard">
            <button className='bg-[#cfc8c8] w-25 p-3 rounded-xl cursor-pointer'>Go back</button>
            </Link>
            <button className='bg-red-600 text-white w-50 p-3 rounded-xl cursor-pointer'>
                Start Deletion</button>
             
        </span>

        </div>

    </div>
  )
}

export default Delete