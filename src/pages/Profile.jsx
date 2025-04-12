import React from "react";
import { FaUser, FaPlus } from "react-icons/fa";
import { Progress } from "flowbite-react";
import { MdClass } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { BiSolidInstitution } from "react-icons/bi";
import { PiCertificateBold } from "react-icons/pi";
import { Link } from "react-router";


function ProfileAvatar() {
  return (
       <>

         <div className="">
          <h1 className="text-3xl">Tutor's Profile</h1>
       <div className="flex justify-end">
        <p className="text-lg">Need Help?</p>
        <Link to="/contactus" className="text-orange-600 text-2xl cursor-pointer">Contact us</Link>
        
       </div>
       </div>

       
       <span className="flex justify-end gap-25 mt-10 -mr-50">
    <Link to="/logout" className="bg-orange-600 text-white p-3 w-25 rounded-xl">Log out</Link>
    <Link to="/delete" className="bg-orange-600 text-white p-3 w-35 rounded-xl">Delete Account</Link>
    </span>



    <div className="relative w-32 h-32">
      <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center border-4 border-gray-400 shadow-lg ml-90">
        <FaUser className="text-gray-600 text-5xl " />
      </div>


      <button
        className="absolute bottom-1 right-1 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-700 shadow-md -mr-70"
        title="Add Profile Image"
      >
        <FaPlus className="text-sm " />
      </button>
      <button className="text-white bg-orange-600 p-3 w-30 mt-3 ml-90">
        Edit profile
      </button>



      <Progress progress={45} className="mt-20 w-100 ml-60 text-orange-600" />;


      <div className="flex gap-30">

      <div className="border-2 border-orange-600 w-100 h-60 bg-[#e6e0e0] ">
        <span className="flex justify-between">
          <h1 className="pl-5 text-xl">Teaching Preferences </h1>
         <Link to="/teaching-preference" className="pr-5 text-orange-600 text-2xl"> Add  </Link>
        </span>



        <div
          className="bg-orange-400 w-80 h-35 ml-10 mr-10 mt-3 rounded-2xl flex flex-col justify-between
        text-white"
        >
          <h1 className="flex pl-5">
            {" "}
            <MdClass className="text-4xl" />{" "}
            <span className="text-xl">Classes</span> <br className="" /> Basic
            and Advance Level
          </h1>

          <p>--------------------------</p>

          <h1 className="flex pl-5 pb-2">
            {" "}
            <MdOutlineSubject className="text-4xl" />{" "}
            <span className="text-xl">Subject</span> <br className="" />{" "}
            JavaScript
          </h1>

        </div>

      </div>


      <div className="border-2 border-orange-600 w-100 h-90 bg-[#e6e0e0]">
        <span className="flex justify-between">
          <h1 className="pl-5 text-xl">Professional Details </h1>
          <Link to="/professional-details" className="pr-5 text-orange-600 text-2xl">Add</Link>
        </span>



        <div
          className="bg-orange-400 w-80 h-70 ml-10 mr-10 mt-3 rounded-2xl flex flex-col justify-between
        text-white"
        >
          <h1 className="flex pl-5">
            {" "}
            <TiContacts className="text-4xl" />{" "}
            <span className="text-xl">Professional Contact</span> <br className="" /> +233 
          </h1>

          <p>--------------------------</p>

          <h1 className="flex pl-5 pb-2">
            {" "}
            <BiSolidInstitution className="text-4xl" />{" "}
            <span className="text-xl">Institution Name</span> <br className="" />{" "}
            MEST Ghana
          </h1>

          <p>--------------------------</p>

<h1 className="flex pl-5 pb-2">
  {" "}
  <PiCertificateBold className="text-4xl" />{" "}
  <span className="text-xl">Certificate Upload</span> <br className="" />{" "}
  
</h1>

        </div>

      </div>
      </div>

     
      <div className="border-2 border-orange-600 w-100 h-80 -mt-13 bg-[#e6e0e0]">
        <span className="flex justify-between">
          <h1 className="pl-5 text-xl">Details </h1>
          <Link to="/details" className="pr-5 text-orange-600 text-2xl">Add</Link>
        </span>



        <div
          className="bg-orange-400 w-80 h-60 ml-10 mt-3 rounded-2xl flex flex-col justify-between
        text-white  decoration-dotted"
        >
          <h1 className="flex pl-5">
            {" "}
            <MdOutlinePerson className="text-4xl " />{" "}
            <span className="text-xl">About</span> <br className="" /> 
            Field Not Completed
          </h1>

          <p>--------------------------</p>

          <h1 className="flex pl-5 pb-2">
            {" "}
            <TbMessageLanguage className="text-4xl" />{" "}
            <span className="text-xl">Language</span> <br className="" />
            Field Not Completed
          </h1>

          <p>--------------------------</p>

          <h1 className="flex pl-5 pb-2">
            {" "}
            <CiLocationOn className="text-4xl" />{" "}
            <span className="text-xl flex flex-col">Country/State</span> <br className="" />
            Field Not Completed
          </h1>

        </div>


      </div>
       

    </div>

    </>
  );
}

export default ProfileAvatar;
