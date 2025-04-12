import React from 'react'

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


  <button className='bg-[#FF9899] p-3 w-25 mt-10'>Save</button>
</div>



  )
}

export default TeachingPreference;