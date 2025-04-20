import React from 'react'

function Register(props) {
    

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register