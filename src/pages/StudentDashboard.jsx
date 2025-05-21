"use client";
import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";

import { RxDashboard } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Image from "../assets/images/logo.png";
import Image1 from "../assets/images/image8.png";
import Image2 from "../assets/images/image9.png";
import Image3 from "../assets/images/image10.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchedule } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { TbCancel } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import ActivityFeed from "./ActivityFeed";
import { MdReport } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";

function StudentDashboard() {
  const cardData = [
    { id: 1, label: "Enrolled Courses", value: 1 },
    { id: 2, label: "Completed Courses", value: 3 },
    { id: 3, label: "Pending Tasks" },
    { id: 4, label: "Cancelled Requests", value: 2 },
  ];

  return (
    <div className="relative bg-[#ece7e7] w-450 h-220 -ml-75 -mt-10">
      <div className="">
        <div className="flex justify-end pt-5">
          <p className="text-lg ">Need Help?</p>
          <Link
            to="/contactus-student"
            className="text-orange-600 text-2xl mr-5 cursor-pointer"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 w-350 h-180 bg-[#ddd6d6] -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white w-260 h-180  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex">
          <div className="text-[#FF9899]">
            <Sidebar className="text-[#FF9899]">
              <SidebarLogo href="#" img={Image} imgAlt=" logo">
                Edumatch
              </SidebarLogo>

              <SidebarItems>
                <SidebarItemGroup>
                  <SidebarItem href="#" icon={RxDashboard}>
                    Dashboard
                  </SidebarItem>

                  <Link to="/home-student">
                    <SidebarItem href="#" icon={FaHome}>
                      Home
                    </SidebarItem>
                  </Link>

                  <Link to="/student-profile">
                    <SidebarItem href="#" icon={CgProfile}>
                      Profile
                    </SidebarItem>
                  </Link>

                  <Link to="/lessons">
                    <SidebarItem href="#" icon={MdOutlineSchedule}>
                      Schedules
                    </SidebarItem>
                  </Link>

                  <Link to="/favourite-list">
                    <SidebarItem href="#" icon={FcLikePlaceholder}>
                      Favourite Tutors
                    </SidebarItem>
                  </Link>

                  <Link to="/delete-tutor">
                    <SidebarItem href="#" icon={RiDeleteBin5Line}>
                      Delete Account
                    </SidebarItem>
                  </Link>

                  <Link to="/report-tutor">
                    <SidebarItem
                      href="#"
                      icon={MdReport}
                      className="text-red-700 text-xl"
                    >
                      Report a Tutor
                    </SidebarItem>
                  </Link>

                  <Link to="/logout">
                    <SidebarItem
                      href="#"
                      icon={IoLogOutOutline}
                      className="mt-50"
                    >
                      Logout
                    </SidebarItem>
                  </Link>
                </SidebarItemGroup>
              </SidebarItems>
            </Sidebar>
          </div>

          <div>
            <span className="flex justify-between">
              <h1 className="text-gray-500 mt-5 text-xl">Hello Reddington,</h1>

              <div className="flex">
                <div className="w-16 mt-5 h-16 rounded-full overflow-hidden border border-gray-300">
                  <Link to="/student-profile">
                    <img
                      src={Image3}
                      alt="User Profile"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </span>

            <span className="flex flex-wrap gap-6 mt-10 ml-15">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-orange-400 w-35 h-40 text-white pt-10 text-lg"
                >
                  {card.id === 3 ? (
                    <IoMdTime className="text-2xl mb-2 ml-15" />
                  ) : card.id === 4 ? (
                    <TbCancel className="text-2xl mb-2 ml-15" />
                  ) : card.id === 2 ? (
                    <IoIosCheckmarkCircle className="text-2xl mb-2 ml-15" />
                  ) : (
                    <IoBook className="ml-17" />
                  )}

                  <p className="text-center mt-4">
                    {card.label} <br /> {card.value}
                  </p>

                  {card.id === 3 && (
                    <Link to="/pending">
                      <button
                        className="-mb-3 bg-white text-orange-500 px-4 py-1 rounded-md text-sm
         hover:bg-orange-100 transition cursor-pointer"
                      >
                        View
                      </button>
                    </Link>
                  )}
                </div>
              ))}
            </span>

            <Link to="/course-completion">
              <button className="bg-[#d3585a] text-white p-2 w-45 mt-10 rounded-xl cursor-pointer">
                Complete a course
              </button>
            </Link>

            <h1 className="text-xl text-gray-500 mt-5 mr-120">New Courses</h1>

            <div className="flex gap-10 ml-5 mt-3">
              <div className="flex">
                <img src={Image1} alt="" width={100} height={50} />
                <span className="bg-orange-400 text-white">
                  <h1 className=" w-50 text-xl">Python </h1>
                  <span className="flex mt-2">
                    <FaStar className="text-[#FF9899]" /> <p>1 review</p>
                  </span>

                  <Link to="/home-student">
                    <button className="bg-[#d3585a] rounded-lg p-1 w-25 cursor-pointer">
                      Find Tutors
                    </button>
                  </Link>
                </span>
              </div>

              <div className="flex">
                <img src={Image2} alt="" width={100} height={50} />
                <span className="bg-orange-400 text-white">
                  <h1 className=" w-50 text-xl">Chemistry </h1>
                  <span className="flex mt-2">
                    <FaStar className="text-[#FF9899]" /> <p>3 reviews</p>
                  </span>

                  <Link to="/home-student">
                    <button className="bg-[#d3585a] rounded-lg p-1 w-25 cursor-pointer">
                      Find Tutors
                    </button>
                  </Link>
                </span>
              </div>
            </div>

            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
