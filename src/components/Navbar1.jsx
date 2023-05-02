import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar1 = () => {

    let Links = [
        {name: 'Home', link: '/'},
        {name: 'Portfolio', link: '/portfolio'},
        {name: 'Services', link: '/services'},
        {name: 'Contact', link: '/contact'}
    ]

    let [open, setOpen]= useState(false);

    const handleClick = () => {
        setOpen(false);
      };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
    <img className="h-14 w-22 mr-2 filter contrast-125 brightness-110 " 
                 src='https://myretrobucket.s3.eu-north-1.amazonaws.com/Logo4.png' 
                 alt="Logo Image" />

            <Link to="/" className="text-xl font-bold">
              <span className="text-gray-400">PHOTO</span><span className="text-orange-400">STUDIO</span>
            </Link>
    </div>

    <div 
    onClick={()=>setOpen(!open)}
    className='text-3xl absolute right-5 top-8 cursor-pointer md:hidden text-orange-400'>
    {open ? <AiOutlineClose /> : <AiOutlineMenu />}
    </div>



        <ul className={`md:flex md:items-center md:pb-0 pb-14 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto
        md-pl-0 pl-9 transition-all duration-500 ease-in ${open? 'top-20 opacity-100' : 'top-[-490px] md-opacity-100'}`}>
            {
                Links.map((link)=>(
                <li key={link.name} className="md:ml-8 text-[16px] md:my-0 my-10">
                    <Link 
                    to={link.link} 
                    onClick={handleClick}
                    className='text-gray-100 hover:border-b-2 border-orange-400 hover:text-orange-400 py-2 rounded-md duration-500' >{link.name}</Link>
                </li>

            ))
            }
            <Link 
            to="/contact"
            onClick={handleClick}>
        <Button>Book Now</Button>
      </Link>
            
        </ul>
    </div>

    </div>
  )
}

export default Navbar1