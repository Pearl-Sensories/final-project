import React from 'react'
import { Link } from 'react-router';

function TeachingPreference() {
  return (
<div class="mb-4">
  <label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    What level do you teach?
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Basic, intermediate and/or advanced level"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

<div className='pt-10'>
<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    Your Subject(s)?
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: JavaScript"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  </div>

  <div className='pt-10'>
<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
     Address
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: Accra-Ghana"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  </div>

  <div className='pt-10'>
<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
     Availability
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: Monday - Friday"
    class="w-50 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

<input
    type="text"
    id="name"
    name="name"
    placeholder="eg: 12pm - 3pm"
    class="w-50 px-4 py-2 ml-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  </div>

  <div className='pt-10'>
<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
     Price per session
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: $30"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  </div>


  <button className='bg-[#FF9899] p-3 w-25 mt-10'>Save</button>
  <Link to="/profile">
  <button className='bg-[#FF9899] p-3 w-25 mt-10 ml-10'>Back</button>
  </Link>
</div>



  )
}

export default TeachingPreference;