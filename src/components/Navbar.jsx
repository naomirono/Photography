import React from 'react';
import { useState } from 'react';
import LogoImage from '../assets/logo4.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-16 w-22 mr-2 filter contrast-125 brightness-110 " src={LogoImage} alt="Logo Image" />
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gray-400">PHOTO</span><span className="text-orange-400">STUDIO</span>
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-orange-400 focus:outline-none focus:text-orange-400"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.41 3.41L16 6.83L12.59 3.41L11.41 4.59L14.83 8L11.41 11.41L12.59 12.59L16 9.17L19.41 12.59L20.59 11.41L17.17 8L20.59 4.59L19.41 3.41Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`hidden md:block ${showMenu ? 'block' : 'hidden'}`}>
            <div className="ml-10 flex items-baseline space-x-4">
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
                to="/pricing"
                onClick={toggleMenu}
                className="text-[18px] text-gray-400 hover:border-b-2 border-orange-400 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium"
>
Pricing
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
