import React from 'react'

function ResetPassword() {
  return (
    <div>
        <details className="mt-4 w-full max-w-md">
  <summary>
    <button
      type="button"
      className="bg-white text-orange-600 px-4 py-2 text-lg cursor-pointer rounded-lg
       hover:bg-orange-100 transition w-full text-left"
    >
      Reset your password?
    </button>
  </summary>

  <div className="mt-4 p-4 bg-orange-50 border border-orange-300 rounded-lg space-y-4">
    <label className="block text-sm font-medium text-orange-700">
      Enter your email
    </label>
    <input
      type="email"
      placeholder="you@example.com"
      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      required
    />

    <p className="text-sm text-orange-700">
      A reset password link will be sent to your email.
    </p>
  </div>
</details>

    </div>
  )
}

export default ResetPassword