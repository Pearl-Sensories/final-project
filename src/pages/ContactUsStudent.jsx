import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router';

function ContactUsStudent() {
  return (

    <div className='text-3xl'>

     <Link to="/student-dashboard">
     <IoIosCloseCircle />
     </Link>

        <h1>Contact the team on email: edumatch@gmail.com</h1>
    </div>
  )
}

export default ContactUsStudent;