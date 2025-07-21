import React from 'react'

function Contact() {
  return (
    <div>
        <div className="bg-gray-100 h-[400px] w-[400px] rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Message
            </button>
        </div>
    </div>
  )
}

export default Contact