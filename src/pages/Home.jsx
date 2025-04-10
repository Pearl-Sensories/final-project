import React from 'react'
import Image from '../assets/images/logo.png'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='bg-[#f4eee9] w-445 -ml-70'>
      <span className=' flex justify-center h-200 -mt-8'>
       <img src={Image} alt="logo goes here"  /> 
       </span>

      <Link to="/createaccount">
       <span className='bg-orange-500 text-white p-5 rounded-2xl'>
        <button className='mb-50'>Let's get started</button>
       </span>
       </Link>
    </div>
  )
}

export default Home