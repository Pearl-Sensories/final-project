import React from "react";
import Image1 from "../assets/images/image13.png";
import Logo from "../assets/images/logo.png";
import { FaFlag, FaRegFlag } from "react-icons/fa";
import { Link } from "react-router";

function PendingTasksTutors() {
  return (
    <div>
      <div className="relative bg-[#ece7e7] w-450 h-220 -ml-75 -mt-10">
        <div className="absolute top-1/2 left-1/2 w-350 h-180 bg-[#ddd6d6] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white w-260 h-180  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

          <Link to="/profile">
          <img src={Logo} alt="" className="w-[60px] h-[50px]" />
          </Link>
            <h1 className="text-3xl text-gray-500">Pending Tasks</h1>

            <span className="flex flex-col mt-10">
              <img
                src={Image1}
                alt="image"
                className="w-60 h-50 border-4 border-gray-600"
              />

              <span className="flex gap-10">

              <h1 className="text-gray-500 text-xl flex mt-3">
                Doja Cat <br /> Physics <br />
                Booked for 3hrs
              </h1>

              <div className="flex flex-col items-center gap-4 mt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="peer hidden" />

                  {/* Unflagged (Default) */}
                  <div className="peer-checked:hidden flex items-center gap-2 text-green-600">
                    <FaRegFlag className="text-xl" />
                    <span className="text-lg">Not Flagged</span>
                  </div>

                  {/* Flagged */}
                  <div className="hidden peer-checked:flex items-center gap-2 text-red-600">
                    <FaFlag className="text-xl" />
                    <span className="text-lg">Flagged</span>
                  </div>
                </label>

               
              </div>
              </span>

              <div className="flex mt-7 gap-3">
                <button className="bg-[#FF9899] text-white p-3 w-35  rounded-xl cursor-pointer ">
                  Accept Request
                </button>

                <button className="bg-orange-400 text-white p-3 w-35 rounded-xl cursor-pointer">
                  Cancel Request
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingTasksTutors;
