import React from 'react'
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router';

function PaymentById() {
  return (
    <div>
        <div className="flex flex-col gap-2 ">
            <img src={Logo} alt="" width={300} className='ml-120'/>
  <label htmlFor="tutor-id" className="text-2xl font-medium text-gray-700">
    Enter tutor's Id
  </label>
  <input
    type="text"
    id="tutor-id"
    name="tutor-id"
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 w-100 ml-110"
    placeholder="e.g. T12345"
  />
</div>

<Link to="/admin-dashboard">
<button className='p-3 w-20 bg-orange-400 rounded-xl text-white mt-10 cursor-pointer'>Back</button>
</Link>

<button className='p-3 w-20 rounded-lg ml-5 bg-[#FF9899] text-white'>Send</button>
    </div>
  )
}

export default PaymentById