import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function CourseActivity() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const activity = [true, true, false, true, false, true];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto mt-5 ml-10">
      <h2 className="text-2xl font-semibold text-gray-500 mb-6">Teaching Activity</h2>

      <div className="grid grid-cols-6 gap-4 text-center text-sm text-gray-600">
        {months.map((month, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="font-medium">{month}</span>
            {activity[index] ? (
              <FaCheckCircle className="text-[#d3585a] text-xl mt-2" />
            ) : (
              <div className="w-5 h-5 mt-2 border border-gray-300 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseActivity;
