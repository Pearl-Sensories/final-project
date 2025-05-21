import React from 'react'
import { Link } from 'react-router'

function ProfessionalDetails() {
  return (
    <div>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Upload Documents</h2>

      {/* Academic Certificate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Academic Certificate
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </div>

      {/* Teaching Certificate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teaching Certificate
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </div>

      {/* ID Proof */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ID Proof
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </div>

      {/* Resume */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Resume
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </div>

      {/* Proof of Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Proof of Address
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-orange-500 file:text-white
            hover:file:bg-orange-600"
        />
      </div>

      {/* Add Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>

    <Link to="/profile">
    <button className='bg-orange-500 text-white p-3 w-25 rounded-2xl mt-5'>Back</button>
    </Link>

    </div>
  )
}

export default ProfessionalDetails