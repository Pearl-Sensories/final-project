import React from 'react'

function Details() {
  return (
    <div>
        <div class="mb-4">
  <label for="about" class="block text-xl font-medium text-gray-700 mb-1">
    About You (will be displayed on your profile)
  </label>
  <textarea
    id="about"
    name="about"
    rows="6"
    placeholder="Write something about yourself..."
    class="w-200 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  ></textarea>
</div>

<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    Your fluent language(s)
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: English, French"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    Country/ Place
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: Accra- Ghana"
    class="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />


  <button className='bg-[#FF9899] p-3 w-25 ml-20'>Save</button>

    </div>
  )
}

export default Details;