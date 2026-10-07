import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ScrollCard from "../Components/ScrollCard";


import packing from"../assets/packing.jfif";
import packing1 from"../assets/packing1.jpg";
import packing2 from"../assets/packing2.jfif";
import packers from"../assets/packers.jfif";
import car from"../assets/car.png";
import logistics from"../assets/logistics.jpg";
import mover from"../assets/mover.jfif";

import mover1 from"../assets/mover1.jpg";
import truck from"../assets/truck.jfif";
import bike from"../assets/bike.jfif";
import mover2 from"../assets/mover2.jfif";





function Home() {

    const images = [packing, packing1, packing2];

    const[currentImage, setCurrentImage] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return() => clearInterval(timer)
    }, [images.length]);


  return (
    <>
    <div className=" relative w-full md:h-[700px]  h-[300px]     overflow-hidden">
        <img src={images[currentImage]} alt="Banner" className="w-full h-full object-over transition-all duration-700" />
       
 <div className="absolute inset-0 bg-black/40 flex md:pt-150  pt-60  justify-center">
          <div className="text-center text-white ">
            <h1 className="text-2xl md:text-3xl bg-gray-500  md:p-2 md:pl-20 md:pr-20 pl-2  pb-1 pr-2  font-sans">
              Office/House Relocation Services
            </h1>

           
          </div>
        </div>
      

    </div> 
{/*second section */}
    <div className="md:w-1/1 w-full   p-4  grid gap-6 sm:grid-cols-2 lg:grid-cols-4  overflow-y-auto grid-cols-2 md:pl-50 pl-15"> 
    <Link to="/About">
    <ScrollCard>
        <div className="   "> 
            <img src={packers} alt="packers"  className="rounded-full border-4 border-gray-200  w-30 h-30"/>
            <span className="text-1xl text-center font-bold hover:text-pink-500">Packers & Movers Services</span>
        </div>
       
        </ScrollCard>
         </Link>

<Link to="/About">
<ScrollCard>
        <div className="   "> 
            <img src={car} alt="packers"  className="rounded-full border-4 border-gray-200  w-30 h-30"/>
            <span className="text-1xl text-center font-bold hover:text-pink-500">Car & Bike Services</span>
        </div>
        </ScrollCard>
        </Link>


<Link to="/About">
<ScrollCard>
        <div className="   "> 
            <img src={logistics} alt="packers"  className="rounded-full border-4 border-gray-200  w-30 h-30"/>
            <span className="text-1xl text-center font-bold hover:text-pink-500">Logistics Services</span>
        </div>
        </ScrollCard>
        </Link>
<Link to="/About">
<ScrollCard>
         <div className="   "> 
            <img src={mover} alt="packers"  className="rounded-full border-4 border-gray-200  w-30"/>
            <span className="text-1xl text-center font-bold hover:text-pink-500">Warehouse Services</span>
        </div>
</ScrollCard>
</Link>
    </div>

    <hr />
    <div className="text-center pt-6">
        <h1 className="text-3xl text-green-400 font-bold" >Welcome to Hans Packers & Movers Pvt. Ltd.</h1>
        <span className="text-2xl">100% Safe, hassle free, secure & Reliable Packers and Movers Service</span>
        <p className="pt-2  text-left  md:pl-40 md:pr-40 pl-3 pr-3">Are you searching for a professional and expert packers and Movers in Allover India? Your research stops here with Hans packers & movers. We will help you with providing best shifting estimations & you can compare from others professional moving companies in Allover India. Whether or not you're searching to relocate all your family members goods, or office goods, cars or bikes, industrial tools or other goods, we will help you in your moving. Simply provide your moving requirements using our Quote Request form and within 10-15 minutes, you'll receive a call from our professional shifting experts.</p>
<p className="pt-5 text-left  md:pl-40 md:pr-40 pl-3 pr-3 ">Hence, if you have any shifting related requirements, then all you are required to fill up our simple form and see how the Hans packers & movers makes difference to your relocation.</p>

<span className="text-2xl">Packers & Movers services Since 2026</span>

<p className="pt-5 text-left  md:pl-40 md:pr-40 pl-3 pr-3 ">Hans packers and movers have great pleasure to introduce ourselves as a leading, well-established and professionally manages packing and moving service providing company of India. Our company Packers Movers Faridabad with long experiences in the transportation industry provides complete range of relocation and shifting services to assiston you your move form one place to another.We offer residential and commercial relocation with equal sprit.</p>

<p className="pt-5 text-left  md:pl-40 md:pr-40 pl-3 pr-3 ">Our services are economical and most important reliable, safe and secure Hans packers & movers handled several corporate, industrial, and residential relocations successfully. Hans packers & movers provide escorted, personalized and professional packing and moving services from one place to another. We have our own goods carriers for transportation of your valuable goods so that goods can reach their respective destination in good positions, means no damage at all.We at Packers and Movers Faridabad pack your goods using quality materials to prevent them any breakage and damage. Hind Global Packers and Movers use packing material of good quality. Hind Global Packers and Movers also provide warehousing and storage facilities on customers demand. Hind Global Packers and Movers also provide escorted and personalized car carrier and transportation services from any part of country. Our motto is Customer Satisfaction</p>


    </div>

    <div className="md:flex gap-10 item-center  justify-center pt-10 pl-3 pr-3">

      <ScrollCard direction="left">
 <img src={mover1} alt="mover1"  className="rounded-lg "/>
 </ScrollCard>


 <ScrollCard direction="right">
 <img src={truck} alt="truck"  className="rounded-lg "/>
 </ScrollCard>

    </div>
<center className="md:pl-30">
    <span className="text-lg font-bold text-center justify-center ">Safe & Hassle free Shifting</span>
    <p className="text-left pl-3" >They respect their genuine customers, since they wish to prove their loyalty towards their service. Elements of transportation is fine tuned and controlled with the system support along with specialists so it can be possibly traveled to the long distances smoothly.</p>
    </center>
    <div className="bg-blue-400 text-center md:pt-2 pt-2 md:pb-7 ">
        <h1 className="text-2xl">Reviews</h1>
        <p className="text-center pl-3 md:pt-5  text-white md:pl-50 md:pr-50">Hans Packers & Movers Pvt. Ltd. services very nice service or timaling carefully from Delhi to Mumbai please others customers advises one time use services of Hans Packers & Movers Pvt. Ltd. services thanks</p>
        <div className="flex justify-center gap-1 text-2xl text-yellow-400">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
</div>
<span className="">Mohan Rathod, Hyderabad</span>
    </div>

    <div className="md:flex gap-10 item-center  justify-center pt-10 pl-3 pr-3 md:pl-40 md:pb-10">
        <img src={bike} alt="bike" className="md:w-120 h-70 rounded-lg w-full"  />
        <div className="md:w-1/2 w-full"> 
        <h3 className=" w-full text-left md:pr-30 font-bold md:pl-10">Call Today! We Offer FREE Estimated Quote for Patna, Delhi, Gurgaon, Mumbai, Noida, Chennai, Bangalore, Patna Area.</h3> 
        <p className="pt-2 pl-3 text-left pb-10 md:pr-30 md:pt-4">Give Hans-packers-reviews a call today to tell us about your cargo needs or to schedule transportation/relocation services for india. We’re open Monday through Saturday, from 9:30am to 7:30pm, and can provide prompt service to clients anywhere in the Noida Gurgaon Patna Lucknow Faridabad area, including Mumbai chennai Bangalore, Kolkata, Hyderabad.</p>

</div>
    </div>



    <div className="bg-[#E8E2CF] md:pt-10 md:pb-10 pt-5">
        <center><h1 className="text-2xl underline font-semibold ">Our Work Process</h1></center>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-5 md:pt-5 pt-5 pb-5" >
<ScrollCard>
  <div className="text-center">
            <div className="mx-auto w-28 h-28 rounded-full border-2 border-blue-500 flex items-center justify-center text-5xl text-blue-600 bg-white">
              📋
            </div>
            <p className="mt-4 font-medium">
              Book Your Service
            </p>
          </div>
</ScrollCard>


<ScrollCard>
<div className="text-center">
            <div className="mx-auto w-28 h-28 rounded-full border-2 border-blue-500 flex items-center justify-center text-5xl text-blue-600">
              📦
            </div>
            <p className="mt-4 font-medium">
              Pick Your Good
            </p>
          </div>
</ScrollCard>

<ScrollCard>
 <div className="text-center">
            <div className="mx-auto w-28 h-28 rounded-full border-2 border-blue-500 flex items-center justify-center text-5xl text-blue-600">
              🛒
            </div>
            <p className="mt-4 font-medium">
              Safe Loading
            </p>
          </div>
          </ScrollCard>


<ScrollCard>
 <div className="text-center">
            <div className="mx-auto w-28 h-28 rounded-full border-2 border-blue-500 flex items-center justify-center text-5xl text-blue-600">
              🚚
            </div>
            <p className="mt-4 font-medium">
              Secure Transportation
            </p>
          </div>
</ScrollCard>


<ScrollCard>
           <div className="text-center">
            <div className="mx-auto w-28 h-28 rounded-full border-2 border-blue-500 flex items-center justify-center text-5xl text-blue-600">
              🏠
            </div>
            <p className="mt-4 font-medium">
              Safe Home Delivery
            </p>
          </div>
</ScrollCard>
        </div>
    </div>
<div className="pt-3 md:flex text-center  justify-center md:pt-10 md:pb-10">
    <div className=" pt-2 pl-2 pr-2 pb-2">
    <img src={mover2} alt="mover2" className="lp-2" />
    </div>



    <div className=" ">
        <h2 className="font-medium text-2xl">Why Choose Hans Packers & Movers Pvt. Ltd</h2>
        <span className="font-medium text-2xl ">Safe - Experience - Secure - Value</span>
        <ul className="list-disc pl-6 marker:text-blue-600 text-left md:pl-30 ml-4 pb-3">
            <li>Get 100% Verified Packers & Movers</li>
  <li>Select the Best & Relevant Quotes</li>
  <li>Get your Shifting done with So Ease</li>
  <li>Move Anywhere Anytime!</li>
  <li>Fully insured and protected for your security and peace of mind</li>
  <li>We are the most respected and recommended movers and packers company</li>
  <li>Fixed rate, no hidden charges.</li>
  <li>Reliable shifting, Home relocation, office shifting, cars/bike relocation, free box packing Free</li>

        </ul>
    </div>
</div>





    </>
  );
}

export default Home;