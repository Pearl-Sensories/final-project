import React from "react";
import Image from "../assets/images/image12.png";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import BottomNavbar from "./BottomNavbar";
import Logo from "../assets/images/logo.png";
import { BsPerson } from "react-icons/bs";

function TutorProfileEdit() {
  return (
    <>
      <div className="flex items-center space-x-4 p-4">
        <div className="w-100 h-100 rounded-full overflow-hidden border border-gray-300">
          <img
            src={Image}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <Link to="/edit">
        <label className="p-3 w-30 cursor-pointer bg-[#FF9899] text-white rounded inline-block">
          Edit Profile
          <input type="file" accept="image/*" className="hidden" />
        </label>
        </Link>
        <Link
          to="/profile"
          className="p-3 w-30 cursor-pointer rounded text-white bg-orange-400"
        >
          Cancel
        </Link>
      </div>

      <div className="">
      
             
              <h1 className=" flex text-2xl -ml-0">Name: Pearl Sensory </h1>
           
              <h1 className=" flex text-2xl -ml-0">Subject: Science </h1>

          <h1 className="text-2xl -ml-145">
            Bio: Certified & charismatic tutor with 15 years of experience
          </h1>

          <span className="flex mt-5 gap-5 text-2xl">
            <PiStudentFill /> <p>Region: Greater Accra</p>
          </span>

          <span className="flex mt-5 gap-5 text-2xl">
            <TbMessages /> <p>Speaks English (Native), +1</p>
          </span>
        </div>
    
    </>
  );
}

export default TutorProfileEdit;
