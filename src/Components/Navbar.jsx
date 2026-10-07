import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className='sticky top-0 md:top-0 z-50 w-full bg-blue-500   px-6 py-4'>

        <button
          className="text-3xl text-white md:hidden "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className='  hidden gap-25 md:flex   md:ml-100'>
<Link to="/" className='text-white hover:text-gray-200  '>HOME</Link>
<Link to="/About" className='text-white hover:text-gray-200 '>ABOUT</Link>
<Link to="/Services" className='text-white hover:text-gray-200 '>SERVICES</Link>
<Link to="/reviews" className='text-white hover:text-gray-200 '>REVIEWS</Link>
<Link to="/contact" className='text-white hover:text-gray-200 '>CONTACT</Link>



        </div>
{/*Mobile Menu */}
{menuOpen &&(
<div className='mt-4 flex flex-col gap-4 border-t border-blur-500 pt-4 md:hidden'>
<Link to=""
onClick={closeMenu}
className='text-white hover:text-gray-200'>HOME</Link>


<Link to="/about"
onClick={closeMenu}
className='text-white hover:text-gray-200'>ABOUT</Link>


<Link to="/services"
onClick={closeMenu}
className='text-white hover:text-gray-200'>SERVICES</Link>


<Link to="/riviews"
onClick={closeMenu}
className='text-white hover:text-gray-200'>RIVIEWS</Link>


<Link to="/contact"
onClick={closeMenu}
className='text-white hover:text-gray-200'>CONTEACT</Link>


</div>




)}
    </nav>
  )
}

export default Navbar;