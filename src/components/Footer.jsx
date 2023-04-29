import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import LogoImage from '../assets/logo4.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center  md:mb-0">
        <img className="h-16 w-22 mr-2 filter contrast-125 brightness-110 pb-2 " src={LogoImage} alt="Logo Image" />
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gray-400">PHOTO</span><span className="text-orange-400">STUDIO</span>
            </Link>
        </div>
        <div className="flex items-center">
          <nav className="mr-4">
            <Link
                to="/"
                className="text-gray-400 py-2 px-4  hover:text-orange-400 "
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-400 py-2 px-4  hover:text-orange-400 "
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 py-2 px-4  hover:text-orange-400 "
              >
                Contact
              </Link>
          </nav>
          <div className="flex items-center">
            <a href="#" className="mr-4">
              <FaFacebook className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer" />
            </a>

            <a href="#" className="mr-4">
              <FaInstagram className="text-3xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer" />
            </a>
            
            <a href="#" className="mr-4">
              <FaTwitter className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
