import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router';

function ContactUs() {
  return (

    <div className='text-3xl'>

     <Link to="/profile">
     <IoIosCloseCircle />
     </Link>

        <h1>Contact the team on email: edumatch@gmail.com</h1>
    </div>
  )
}

export default ContactUs