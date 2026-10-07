import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SlArrowRightCircle } from "react-icons/sl";



function Footer() {
  return (
    <div className='grid md:grid-cols-2 '>

        <div className='w-full '>
            <iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="Google Map"
></iframe>
        </div>
        <div className=' w-full p-10 bg-yellow-400'>
            <h1 className='underline text-white md:text-2xl text-1xl pb-3'>OUR SERVICE AREA INCLUDES</h1>
            
            <div className='flex gap-5 md:pt-5'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white hover:text-black'>Packers & Movers Ahmedabad</span>

</div>


 <div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white hover:text-black'>Packers & Movers Bangalore</span>

</div>


 <div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white  hover:text-black'>Packers & Movers Chandigarh</span>

</div>


 <div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white  hover:text-black'>Packers & Movers Chennai</span>

</div>



 <div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white hover:text-black'>Packers & Movers Delhi
</span>

</div>

<div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white hover:text-black'>Packers & Movers Goa
</span>

</div>


<div className='flex gap-5 md:pt-2'>
            <div>
               <SlArrowRightCircle className='text-white md:mt-1' />
</div>
<span className='text-white hover:text-black'>Packers & Movers Lucknow
</span>

</div>



        </div>
    </div>
  )
}

export default Footer