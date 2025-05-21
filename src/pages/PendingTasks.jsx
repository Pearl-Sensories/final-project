import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router";

function PendingTasks() {
  return (
    <div>
      <div className="relative bg-[#ece7e7] w-450 h-220 -ml-75 -mt-10">
        <div className="absolute top-1/2 left-1/2 w-350 h-180 bg-[#ddd6d6] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white w-260 h-180  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          
          <h1 className="text-3xl text-gray-500 ">Pending Tasks</h1>

          <Link to="/student-dashboard">
          <img src={Logo} alt="" width={50} height={30} className="-mt-9"/>
          </Link>

         <div className="flex justify-between mt-10 text-2xl">
         <h1>Awaiting Tutor's approval</h1>
         <h1>Accepted Requests</h1>
         <h1>Rejected Requests</h1>
         </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingTasks;
