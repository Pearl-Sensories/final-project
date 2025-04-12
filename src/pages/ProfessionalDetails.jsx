import React from 'react'

function ProfessionalDetails() {
  return (
    <div>
        <label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    Contact
  </label>
  <input
    type="number"
    id="name"
    name="name"
    placeholder="eg: +233 ..."
    className="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

<label for="name" class="block text-lg font-medium text-gray-700 mb-1">
    Institution name (where you teach)
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="eg: MEST Ghana"
    className="w-100 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

<div class="mb-4">
  <label for="fileUpload" class="block text-lg font-medium text-gray-700 mt-10">
    Upload your certificates for verification
  </label>
  <input
    type="file"
    id="fileUpload"
    name="fileUpload"
    className=" mt-5 block w-full text-sm text-gray-500
           file:mr-4 file:py-2 file:px-4
           file:rounded-md file:border-0
           file:text-sm file:font-semibold
           file:bg-blue-50 file:text-blue-700
           hover:file:bg-blue-100"
  />
</div>


<button className='bg-[#FF9899] p-3 w-25 mt-20'>Save</button>

    </div>
  )
}

export default ProfessionalDetails