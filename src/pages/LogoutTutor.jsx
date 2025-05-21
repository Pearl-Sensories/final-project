import React from 'react'
import { Link } from 'react-router'

function LogoutTutor() {
  return (
    <div>
         <div className='bg-[#F5F5F5] w-400 h-200 -ml-50'>

<div className='bg-white border-2 w-120 h-100 rounded-2xl ml-130 flex flex-col justify-between '>
<h1 className='text-2xl mt-3'>Logout your Account</h1>

<p className='text-xl'>You will be completely logged-out. <br /> You cannot access your prolfile<br /> only if you login with your username and password </p>

<span className='flex justify-center gap-5 mb-5'>

  <Link to="/profile">
    <button className='bg-[#cfc8c8] w-25 p-3 rounded-xl cursor-pointer'>Cancel</button>
    </Link>
    <button className='bg-[#FF9899] text-white w-50 p-3 rounded-xl cursor-pointer'>
        Logout</button>
</span>

</div>

</div>
    </div>
  )
}

export default LogoutTutor