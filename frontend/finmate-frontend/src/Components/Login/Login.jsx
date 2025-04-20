import React from 'react'

function Login(props) {
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
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
              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }

export default Login