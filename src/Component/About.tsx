import React from 'react'

function About() {
  return (
    <div>
        <div className="bg-gray-100  backdrop-blur-3xl h-[400px] w-[400px] rounded-2xl flex flex-col items-center justify-center p-4 shadow-2xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600">
                We are a company dedicated to providing the best products and services to our customers.
            </p>
        </div>
    </div>
  )
}

export default About