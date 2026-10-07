import React from 'react'
import { Link } from "react-router-dom";
import services from"../assets/services.png";



import { MdWatchLater } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiTruck } from "react-icons/hi2";
import { LuNotebookTabs } from "react-icons/lu";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function Services() {
  return (
    <>
    <div className=' "relative w-full '>
        <img src={services} alt='services'  className='md:h-180 md:w-full'/>

<div className="absolute inset-0 flex items-center justify-center md:mt-210  ">
        <div className='bg-gray-400 md:pt-5 md:pl-10 md:pb-10 rounded-lg md:w-200'>
            <h1 className='font-medium  text-3xl text-white'>Office Relocation</h1>
            <p className='font-medium md:mt-3 text-white '>Home Office Relocation Services</p>

        </div>
         </div>
        
    </div>



     <div
      className="relative w-full max-w-7xl mx-auto rounded-xl border border-white/40  md:mt-10 md:mb-10
      bg-gray-200 backdrop-blur-sm p-4 shadow-xl"
    >
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-yellow-700">
          📞 सुरक्षित और तेज़ सेवा के लिए कॉल करें:
          <span className="text-black ml-1">
            +91 8292733112
          </span>
        </h2>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">

        {/* Full Name */}
        <div>
          <label className="inline-block bg-orange-500 px-2 py-1 text-sm text-black">
            Full Name *
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full h-10 bg-white px-3 outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="inline-block bg-orange-500 px-2 py-1 text-sm text-black">
            Mobile Number *
          </label>

          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full h-10 bg-white px-3 outline-none"
          />
        </div>

        {/* From Location */}
        <div>
          <label className="inline-block bg-orange-500 px-2 py-1 text-sm text-black">
            From Location *
          </label>

          <input
            type="text"
            placeholder="Moving from"
            className="w-full h-10 bg-white px-3 outline-none"
          />
        </div>

        {/* To Location */}
        <div>
          <label className="inline-block bg-orange-500 px-2 py-1 text-sm text-black">
            To Location *
          </label>

          <input
            type="text"
            placeholder="Moving to"
            className="w-full h-10 bg-white px-3 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="inline-block bg-orange-500 px-2 py-1 text-sm text-black">
            Preferred Moving Date *
          </label>

          <input
            type="date"
            className="w-full h-10 bg-white px-3 outline-none"
          />
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full h-10 bg-yellow-400 hover:bg-yellow-500
            text-white font-bold rounded transition duration-300"
          >
            Request Quote
          </button>
        </div>

      </form>
    </div>

    <center>
        <h1 className='
<center>
<h1 className=" font-medium text-blue-500 md:text-3xl mt-5 mb-1  mt-3'>Professional Office <span className='font-medium text-yellow-500 md:text-3xl'>Relocation Services</span></h1>
<p className='text-gray-500 md:mt-5 md:mb-5 mt-3 text-left ml-5 md:text-center '>Mehar Packers and Movers secure packing, unpacking with minimal downtime and on-time delivery.</p>
    </center>

    <center>
        <p className='md:mt-10 md:mb-5 mt-5 mb-5 text-left ml-5 md:text-center '>Relocating an office involves more than just shifting furniture. The office items like glasses, housewares etc, require professional handling to ensure safe transit.</p>
    </center>

    <div className='relative w-full md:pt-10'>
<center>
    <h1 className='font-medium text-black md:text-3xl mb-5 pl-3 pr-3'>Why Choose Mehar Packers and Movers for Office Shifting</h1>
</center>


<div className='grid grid-cols-1 md:grid-cols-3 gap-6    md:pt-10 md:pl-40 md:pr-40 md:pb-10 pb-10'>


<div className="md:w-100 md:h-65  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5">
<div className="md:w-13  md:h-13 md:pl-1 md:pt-1 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <MdWatchLater   className=" font-medium text-5xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5">Minimal Downtime </h2>
<p className="md:mt-2 font- text-1xl mt-3">We understand that every hour your office is closed impacts your productivity and revenue. Our team coordinates moves during off-peak hours or weekends.</p>

</div>


<div className="md:w-100 md:h-65  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3  ml-5 mr-5">
<div className="md:w-13  md:h-13 md:pl-1 md:pt-1 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <MdHealthAndSafety   className=" font-medium text-5xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5">Safety and Compliance </h2>
<p className="md:mt-2 font- text-1xl mt-3 "> Our team strictly follows the guidelines to protect both your assets and our staff.</p>

</div>


<div className="md:w-100 md:h-65  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3  ml-5 mr-5">
<div className="md:w-13  md:h-13 md:pl-1 md:pt-1 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaLaptopCode   className=" font-medium text-5xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5">Expert Packing and Handling </h2>
<p className="md:mt-2 font- text-1xl  mt-3"> IT equipment: Anti-static wrapping, secure crating
 Furniture: Disassembling, padding, and boxes.</p>

</div>



<div className="md:w-100 md:h-65  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3  ml-5 mr-5">
<div className="md:w-13  md:h-13 md:pl-1 md:pt-1 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaLocationDot   className=" font-medium text-5xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5">Real-time Tracking </h2>
<p className="md:mt-2 font- text-1xl mt-3 ">The real-time tracking of the goods while transportation is made available by GPS-enabled fleets..</p>

</div>


<div className="md:w-100 md:h-65  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3  ml-5 mr-5">
<div className="md:w-13  md:h-13 md:pl-1 md:pt-1 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <HiTruck  className=" font-medium text-5xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5">Transparent Pricing </h2>
<p className="md:mt-2 font- text-1xl mt-3 ">Receive an itemized quote including packing materials, labor cost, transport cost etc.</p>

</div>


</div>


    </div>


<div className=''>
    <center>
        <h1 className='font-medium md:text-3xl'>We Are Committed to Serve You</h1>
    </center>

<div className='grid grid-cols-1 md:grid-cols-4 gap-6    md:pt-10 md:pl-20 md:pr-40 md:pb-20 pb-10'>

    <div className="md:w-100 md:h-35  md:pl-15 md:pt-5 rounded-lg   pl-5 pt-3 pb-3">
<div className="md:w-13  md:h-13 md:pl-37 md:pt-1 rounded-sm pl-45">
    <MdWatchLater   className=" font-medium text-5xl text-[#F28C28] "/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5 text-center">Reliability </h2>
<p className="md:mt-2 font- text-1xl mt-3 text-center ">On-time arrival and deliveries</p>

</div>


 <div className="md:w-100 md:h-35  md:pl-15 md:pt-5 rounded-lg   pl-5 pt-3 pb-3">
<div className="md:w-13  md:h-13 md:pl-37 md:pt-1 rounded-sm pl-45 ">
    <LuNotebookTabs   className=" font-medium text-5xl text-[#F28C28] "/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5 text-center">Responsibility </h2>
<p className="md:mt-2 font- text-1xl mt-3 text-center ">Full transit insurance coverage</p>

</div>


 <div className="md:w-100 md:h-35  md:pl-15 md:pt-5 rounded-lg   pl-5 pt-3 pb-3">
<div className="md:w-13  md:h-13 md:pl-37 md:pt-1 rounded-sm pl-45 ">
    <FaHandshakeSimple   className=" font-medium text-5xl text-[#F28C28] "/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5 text-center">Respect </h2>
<p className="md:mt-2 font- text-1xl mt-3 text-center ">Careful handling of all items</p>

</div>


 <div className="md:w-100 md:h-35  md:pl-15 md:pt-5 rounded-lg   pl-5 pt-3 pb-3">
<div className="md:w-13  md:h-13 md:pl-37 md:pt-1 rounded-sm pl-45">
    <FaPhoneAlt    className=" font-medium text-5xl text-[#F28C28] "/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-5 text-center">Responsiveness</h2>
<p className="md:mt-2 font- text-1xl mt-3 text-center ">24×7 customer support</p>

</div>



</div>
</div>

    </>
  )
}

export default Services;