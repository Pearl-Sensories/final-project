import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router';

function ReportTutor() {
  return (
    <div>
          
          <Link to="/student-dashboard">
        <IoMdCloseCircle className='text-4xl text-gray-600'/>
        </Link>

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-orange-600">Submit a Complaint</h2>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="user-id" className="text-sm font-medium text-gray-700 mb-1">
            Enter your ID
          </label>
          <input
            type="text"
            id="user-id"
            name="user-id"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="e.g. U12345"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="complaints" className="text-sm font-medium text-gray-700 mb-1">
            Complaints
          </label>
          <textarea
            id="complaints"
            name="complaints"
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Describe your issue..."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="tutor-id" className="text-sm font-medium text-gray-700 mb-1">
            Tutor's ID
          </label>
          <input
            type="text"
            id="tutor-id"
            name="tutor-id"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="e.g. T98765"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>
    </div>
    </div>
  )
}

export default ReportTutor