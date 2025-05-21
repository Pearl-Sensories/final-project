import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router";

function BookTutor() {
  return (
        <>

     <Link to="/home-student">
    <IoCloseCircle className="text-4xl text-gray-500" />
    </Link>

    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Book a Session
      </h2>

      <form className="space-y-4">
        {/* Tutor ID */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Tutor's ID
          </label>
          <input
            type="text"
            placeholder="Enter tutor's ID"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Student ID */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Student's ID
          </label>
          <input
            type="text"
            placeholder="Enter student's ID"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Booking Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Booking Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Duration (in hours)
          </label>
          <input
            type="number"
            placeholder="e.g. 2"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Book Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Book
        </button>
      </form>
    </div>
    </>
  );
}

export default BookTutor;
