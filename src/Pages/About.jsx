import { Link } from "react-router-dom";
import mover3 from"../assets/mover3.jfif";

import ScrollCard from "../Components/ScrollCard";


import { MdOutlineArrowCircleRight } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaTruckMoving } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaLaptopHouse } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";

function About() {
  return (
   <>
<center><h1 className="font-medium text-green-500 md:text-2xl md:mt-5 text-1xl pt-5 ">Top Packers & Movers Services in Allover India</h1></center>
<hr className="md:ml-60 md:mr-60 md:mt-2 text-gray-500 "/>

<div className="grid md:grid-cols-2  justify-center md:pt-5">
    <ScrollCard direction="left">
    <div className="  md:pl-60 pt-3 pl-5 pr-5 pb-3">
    <img src={mover3} alt="mover3" className=" md:h-70 md:w-full  " />
    </div>
    </ScrollCard>
 <ScrollCard direction="right">
    <div className="w-full md:pl-10 pl-5 pb-3">

        <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-1'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Get 100% Verified Packers & Movers</span>
        </div>
        

        <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-1'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Select the Best & Relevant Quotes</span>
        </div>


 <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-1'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Get your Shifting done with So Eases</span>
        </div>



         <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-1'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Move Anywhere Anytime!</span>
        </div>



 <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-1'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Fixed rate, no hidden charges.</span>
        </div>



 <div className='flex gap-5 md:pt-2'>
        <div>               
        <MdOutlineArrowCircleRight  className='text-black md:mt-2 font-medium'  />
        </div>
        <span className='text-black hover:text-black font-medium'>Reliable shifting, Home relocation, office<br />shifting, cars/bike relocation, free box packing Free</span>
        </div>

<Link to="/contact">
<button className="bg-yellow-500 text-white   font-medium rounded-lg cursor-pointer md:mt-5 md:w-50 md:h-10 mt-5 w-40 h-10"> Get Free Quote <span className="font-medium text-2xl">→</span></button>
</Link>
</div>
    </ScrollCard>

    
</div>


{/*card section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6    md:pt-10 md:pl-40 md:pr-40 md:pb-10 pb-10"  >

<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3  ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <HiOutlineBuildingOffice2  className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Office Shifting </h2>
<p className="md:mt-2 font- text-1xl ">Professional office shifting services and office packers and movers for organized business moves.</p>

</div>




<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaTruckMoving   className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Car & Bike Transport </h2>
<p className="md:mt-2 font- text-1xl ">Safe bike transport service and reliable car transport with secure handling..</p>

</div>





<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaCircleArrowDown  className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Loading & Unloading</h2>
<p className="md:mt-2 font- text-1xl ">Skilled manpower for efficient loading & unloading services.</p>

</div>




<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <HiOutlineDesktopComputer  className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Corporate Relocation </h2>
<p className="md:mt-2 font- text-1xl ">Reliable corporate relocation services from experienced corporate relocation companies..</p>

</div>




<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaLaptopHouse  className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Home Shifting </h2>
<p className="md:mt-2 font- text-1xl ">House shifting services, home shifting services & household shifting services for safe relocation.</p>

</div>




<div className="md:w-100 md:h-50  md:pl-5 md:pt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-2 border-yellow-500  pl-5 pt-3 pb-3 ml-5 mr-5 h-40">
<div className="md:w-13 bg-[#F28C281F] md:h-13 md:pl-3 md:pt-3 rounded-sm hover:bg-[#F28C28] w-15 h-10 pl-3 pt-1">
    <FaWarehouse  className=" font-medium text-3xl text-[#F28C28] hover:text-white"/>
</div>
<h2 className="md:mt-2 font-medium md:text-2xl text-1xl mt-2">Warehouse Shifting </h2>
<p className="md:mt-2 font- text-1xl ">Safe and efficient warehouse shifting services and warehouse relocation services.</p>

</div>



</div>



<div className="bg-[#F28C28] rounded-lg md:pl-15 md:pt-15 md:ml-50 md:mr-50 md:mb-10 pt-5 pl-3 pr-3 mb-5">
    <h2 className=" text-3xl font-bold text-whit md:mb-5 mb-5">Plan your move with us.</h2>
    <span className="text-white md:mt-5">Call the booking line, message on WhatsApp, or send your details for a written estimate.</span>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6    md:mt-5 md:pb-10  pt-10 pl-5 pr-5 pb-5">
        
        <button className="bg-white rounded-full text-black md:w-60 md:h-15 cursor-pointer h-10 font-medium md:text-1xl hover:bg-gray-300 ">Call +91 8292733112</button>


        <button className="bg-green-500 rounded-full text-white md:w-40 md:h-15 h-10 font-medium md:text-1xl cursor-pointer hover:bg-green-700">whatsapp us</button>


        <Link to="/contact">
        <button className="text-blue-500 md:w-60 md:h-15 border-2 border-gray-400 rounded-full h-10 font-medium md:text-1xl cursor-pointer  hover:border-gray-700">Get a writen estimate</button>
    </Link>
    </div>
</div>
   </>
  );
}

export default About;