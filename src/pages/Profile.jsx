"use client";
import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import Image from "../assets/images/logo.png";
import Image3 from "../assets/images/image12.png";
import { MdClass } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { BiSolidInstitution } from "react-icons/bi";
import { PiCertificateBold } from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { TbCancel } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router";
import { RxDashboard } from "react-icons/rx";
import ActivityFeed from "./ActivityFeed";
import { IoLogOutOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchedule } from "react-icons/md";
import Image1 from "../assets/images/image8.png";
import Image2 from "../assets/images/image9.png";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

function ProfileAvatar() {
  const cardData = [
    { id: 1, label: "Enrolled Courses", value: 1 },
    { id: 2, label: "Completed Courses", value: 3 },
    { id: 3, label: "Pending Tasks", value: 5 },
    { id: 4, label: "Cancelled Requests", value: 2 },
  ];


  
  return (
    <>
      <div className="relative bg-[#ece7e7] w-450 h-300 -ml-75 -mt-10">
        <div className="">
          <h1 className="text-3xl pt-5">Tutor's Dashboard</h1>
          <div className="flex justify-end">
            <p className="text-lg">Need Help?</p>
            <Link
              to="/contactus"
              className="text-orange-600 text-2xl mr-5 cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>

        

        <div className="absolute top-1/2 left-1/2 w-350 h-180 bg-[#ddd6d6] -translate-x-1/2 -translate-y-1/2 ">
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

                    <Link to="/profile-edit">
                      <SidebarItem href="#" icon={CgProfile}>
                        Profile
                      </SidebarItem>
                    </Link>

                    <Link to="/lessons-tutor">
                      <SidebarItem href="#" icon={MdOutlineSchedule}>
                        Schedules
                      </SidebarItem>
                    </Link>

                    <Link to="/message-tutor">
                    <SidebarItem href="#" icon={LuMessageSquareMore}>
                        Messages
                      </SidebarItem>
                      </Link>

                      <Link to="/delete-tutor">
                    <SidebarItem href="#" icon={RiDeleteBin5Line }>
                        Delete Account
                      </SidebarItem>
                      </Link>

                    <Link to="/logout-tutor">
                      <SidebarItem
                        href="#"
                        icon={IoLogOutOutline}
                        className="mt-60"
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
                <h1 className="text-gray-500 text-xl mt-5">Hello Reddington,</h1>

                <div className="flex">
                  <div className="w-16 h-16 mt-5 rounded-full overflow-hidden border border-gray-300">
                    <Link to="/profile-edit">
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
                    className="bg-orange-400 w-35 h-40 text-white pt-8 text-lg"
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
                      <Link to="/pendingtasks">
                        <button
                          className="-mb-5 bg-white text-orange-500 px-4 py-1 rounded-md text-sm
                                 hover:bg-orange-100 transition cursor-pointer"
                        >
                          View
                        </button>
                      </Link>
                    )}
                  </div>
                ))}
              </span>

              <div className=" gap-10 ml-5 mt-3"></div>

              <Link to="/complete-course">
                <button className="bg-[#d3585a] text-white p-2 w-45 mt-10 rounded-xl cursor-pointer">
                  Complete a course
                </button>
              </Link>

              <ActivityFeed />

              <h1 className="text-gray-500 text-xl mt-5">New Students</h1>

              <div className="flex gap-10 ml-5 mt-3">
                <div className="flex">
                  <img src={Image1} alt="" width={100} height={50} />
                  <span className="bg-orange-400 text-white">
                    <h1 className=" w-50 text-xl">Python for 2hrs </h1>
                    <span className="flex mt-2">
                      <p>Name: Pearl</p>
                    </span>

                    <span className="flex gap-5">
                      <button className="bg-[#d3585a] rounded-lg p-1 w-20  cursor-pointer text-sm">
                        Cancel
                      </button>

                      <button className="bg-[#d3585a] rounded-lg p-1 w-20 cursor-pointer text-sm">
                        Accept
                      </button>
                    </span>
                  </span>
                </div>

                <div className="flex">
                  <img src={Image2} alt="" width={100} height={50} />
                  <span className="bg-orange-400 text-white">
                    <h1 className=" w-50 text-xl"> Chemistry for 3hrs </h1>
                    <span className="flex mt-1">
                      <FaStar className="text-[#FF9899]" /> <p>Name: James</p>
                    </span>

                    <span className="flex gap-5">
                      <button className="bg-[#d3585a] rounded-lg p-1 w-20  cursor-pointer text-sm">
                        Cancel
                      </button>

                      <button className="bg-[#d3585a] rounded-lg p-1 w-20 cursor-pointer text-sm">
                        Accept
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap gap-6 bg-[#ece7e7] w-450 h-300 -ml-75 pl-90">
        <div className="border-2 border-orange-600 w-280 bg-[#e6e0e0] rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <h1 className="text-md">Personal Details</h1>
            <Link to="/teaching-preference" className="text-orange-600 text-md">
              Add
            </Link>
          </div>

          <div className="bg-orange-400 rounded-2xl text-white p-4 flex flex-col gap-4">
            <div className="flex gap-2 items-start">
              <MdClass className="text-3xl" />
              <div>
                <p className="font-semibold">Classes</p>
                <p>Basic and Advanced Level</p>
              </div>
            </div>

            <div className="border-t border-white opacity-40" />

            <div className="flex gap-2 items-start">
              <MdOutlineSubject className="text-3xl" />
              <div>
                <p className="font-semibold">Subject</p>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-orange-600 w-280 bg-[#e6e0e0] rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <h1 className="text-md">Professional Details</h1>
            <Link
              to="/professional-details"
              className="text-orange-600 text-md"
            >
              Add
            </Link>
          </div>

          <div className="bg-orange-400 rounded-2xl text-white p-4 flex flex-col gap-4">
            <div className="flex gap-2 items-start">
              <TiContacts className="text-3xl" />
              <div>
                <p className="font-semibold">Teaching Certificate</p>
                <i>not uploaded</i>
              </div>
            </div>

            <div className="border-t border-white opacity-40" />

            <div className="flex gap-2 items-start">
              <BiSolidInstitution className="text-3xl" />
              <div>
                <p className="font-semibold">Academic Certificate</p>
                <i>not uploaded</i>
              </div>
            </div>

            <div className="border-t border-white opacity-40" />

            <div className="flex gap-2 items-start">
              <PiCertificateBold className="text-3xl" />
              <div>
                <p className="font-semibold">Resume</p>
                <p className="italic text-sm text-gray-200">Not Uploaded</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-orange-600 w-280 bg-[#e6e0e0] rounded-lg p-4">
 
    <h1 className="flex text-md mb-2">Document Status</h1>
    


  <div className="bg-orange-400 rounded-2xl text-white p-4 flex flex-col gap-4">
    <div className="flex justify-between border-b border-white pb-2">
      <span>Academic Certificate</span>
      <span className="text-yellow-200 font-semibold">Pending Approval</span>
    </div>

    <div className="flex justify-between border-b border-white pb-2">
      <span>Teaching Certificate</span>
      <span className="text-green-200 font-semibold">Approved</span>
    </div>

    <div className="flex justify-between border-b border-white pb-2">
      <span>ID Proof</span>
      <span className="text-green-200 font-semibold">Approved</span>
    </div>

    <div className="flex justify-between border-b border-white pb-2">
      <span>Resume</span>
      <span className="text-yellow-200 font-semibold">Pending Approval</span>
    </div>

    <div className="flex justify-between">
      <span>Proof of Address</span>
      <span className="text-yellow-200 font-semibold">Pending Approval</span>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default ProfileAvatar;
