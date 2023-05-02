import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className=" fixed top-0 left-0 right-0 bg-black p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 flex items-center">

            <img className="h-16 w-22 mr-2 filter contrast-125 brightness-110 " 
                 src='https://myretrobucket.s3.eu-north-1.amazonaws.com/Logo4.png' 
                 alt="Logo Image" />

            <Link to="/" className="text-2xl font-bold">
              <span className="text-gray-400">PHOTO</span><span className="text-orange-400">STUDIO</span>
            </Link>

          </div>

          <div onClick={toggleMenu} className="block md:hidden">
            {showMenu ? <AiOutlineClose size={20} className='text-orange-300'/> : <AiOutlineMenu size={20} className='text-orange-300'/>}
          </div>
        
          <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
            <div className="ml-10 flex items-baseline space-x-4 ">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-[18px] text-orange-400 hover:border-b-2 border-orange-400 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                onClick={toggleMenu}
                className="text-[18px] text-gray-400 hover:border-b-2 border-orange-400 hover:text-orange-400  px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                onClick={toggleMenu}
                className="text-[18px] text-gray-400 hover:border-b-2 border-orange-400 hover:text-orange-400  px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="text-[18px] text-gray-400 hover:border-b-2 border-orange-400 hover:text-orange-400  px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
);
}


export default Navbar;
