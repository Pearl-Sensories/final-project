import React from 'react'

function Level() {
  return (
    <div className="p-4">
            <label htmlFor="education-level" className="block mb-2 text-2xl font-medium text-gray-700">
        Educational Level
      </label>
      <select
        id="education-level"
        name="education-level"
        className="block w-100 p-2 ml-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9899]"
      >
        <option value="">Select level</option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <button className='bg-orange-600 p-3 w-25 text-white text-lg mt-10 cursor-pointer'>Send</button>
    </div>
  )
}

export default Level