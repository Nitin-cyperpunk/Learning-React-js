import React from 'react'

function Login() {
  return (
    <div>
    <div className="bg-gray-100 h-[400px] w-[400px] rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
        </button>
    </div>
    </div>
  )
}

export default Login