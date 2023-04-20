import React from 'react';
import LogoImage from '../assets/logo4.png';

function Navbar() {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
        <div className="flex-shrink-0 flex items-center">
            <img className="h-16 w-22 mr-2 brightness-150" src={LogoImage} alt="Logo Image" />
            <a href="/" className="text-2xl font-bold">
               <span className="text-gray-400">PHOTO</span><span className="text-yellow-300">STUDIO</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-[17px]  hover:border-b-2 border-yellow-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium text-yellow-300 ">Home</a>
              <a href="/" className="text-[17px] text-gray-400 hover:border-b-2 border-yellow-300 hover:text-yellow-300  px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="/" className="text-[17px] text-gray-400 hover:border-b-2 border-yellow-300 hover:text-yellow-300  px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/" className="text-[17px] text-gray-400 hover:border-b-2 border-yellow-300 hover:text-yellow-300  px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="/" className="text-[17px] text-gray-400 hover:border-b-2 border-yellow-300 hover:text-yellow-300  px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
