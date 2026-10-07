import React from 'react'
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
          Contact Us
        </h1>

        <p className="mt-3 text-gray-600 text-sm md:text-lg">
          Get in touch with HANS Packers & Movers for safe and reliable moving services.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Side - Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Phone
              </h3>

              <p className="text-gray-600">
                829-273-3112
              </p>

              <p className="text-gray-600">
                707-084-3946
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Email
              </h3>

              <p className="text-gray-600 break-all">
                info@hanspackersmovers.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Address
              </h3>

              <p className="text-gray-600">
                New Jaganpura Patna, Bihar
              </p>
            </div>
          </div>

          {/* Timing */}
          <div className="flex items-start gap-4">
            <div className="bg-purple-600 text-white p-3 rounded-full">
              <FaClock />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Working Hours
              </h3>

              <p className="text-gray-600">
                Monday - Friday
              </p>

              <p className="text-gray-600">
                9:30 AM - 7:30 PM
              </p>
            </div>
          </div>

        </div>


        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Moving From */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Moving From
              </label>

              <input
                type="text"
                placeholder="Enter pickup location"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Moving To */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Moving To
              </label>

              <input
                type="text"
                placeholder="Enter destination"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Bottom Call Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white shadow-lg">

        <h2 className="text-2xl md:text-3xl font-bold">
          Need Packers & Movers?
        </h2>

        <p className="mt-2">
          Call us today for a free moving estimate.
        </p>

        <a
          href="tel:8292733112"
          className="inline-block mt-4 bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          📞 Call Now
        </a>

      </div>

    </div>
    
    </>
  )
}

export default Contact