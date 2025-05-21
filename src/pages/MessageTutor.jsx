import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router";

function MessageTutor() {
  return (
    <>

     <Link to="/profile">
    <IoIosCloseCircle className="text-4xl text-gray-500"/>
    </Link>

    <div className="max-w-3xl mx-auto h-screen flex flex-col border rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-orange-500 text-white px-6 py-4 text-xl font-bold">
        Chat with Student Amber
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 space-y-4">
        {/* Student Message */}
        <div className="flex">
          <div className="bg-white rounded-lg px-4 py-2 shadow text-sm max-w-xs">
            Hi, I have a question about the assignment.
          </div>
        </div>

        {/* Tutor Message */}
        <div className="flex justify-end">
          <div className="bg-orange-100 text-gray-800 rounded-lg px-4 py-2 shadow text-sm max-w-xs">
            Sure! What part are you finding difficult?
          </div>
        </div>

        {/* Student Message */}
        <div className="flex">
          <div className="bg-white rounded-lg px-4 py-2 shadow text-sm max-w-xs">
            The part on loops, I'm not sure when to use for or while.
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
          Send
        </button>
      </div>
    </div>
    </>
  );
}

export default MessageTutor;
