import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import CameraImage from '../assets/P4.png';
import BgImage from '../assets/IMG_9791.JPG';


const LandingPage = () => {
  return (
    <div className="flex justify-between h-[89vh] background  bg-cover bg-no-repeat"  style={{
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        
      }}>
      
      <div className="w-1/2 flex flex-col justify-center bg-black bg-opacity-70 text-start">
           <h1 className="text-6xl font-bold mb-5 text-white mt-20 pl-10">PHOTOGRAPHY</h1>
           <h1 className="text-5xl font-bold mb-10 text-orange-400 pl-10">STUDIO</h1>
           <h6 className="text-3xl font-medium  text-gray-500  pl-10">For All Services</h6>
           <p className=" text-gray-400 m-10 text-lg">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae velit vel arcu ultricies lobortis. Donec quis consectetur purus. Nam in pharetra ipsum, vel placerat eros. 
            </p>
        
         <div className="flex justify-between mt-20 m-8">
            <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl mb-4">Book Now</button>
        <div className='flex justify-between'>
            <FaFacebook className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer m-4 bg-white rounded-full p-1" />
            <FaTwitter className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer m-4 bg-white rounded-full p-1" />
            <FaInstagram className="text-4xl text-pink-500 hover:text-pink-700 cursor-pointer m-4 bg-white rounded-full p-1" />
            <FaYoutube className="text-4xl text-red-500 hover:text-red-700 cursor-pointer m-4 bg-white rounded-full p-1" />
        </div>
  
            
  
          </div>

        </div>
      <div className="w-1/2 flex flex-col justify-center bg-black bg-opacity-70 ">
        <img src={CameraImage} alt="Camera" className="w-full" style={{ height: '600px' }}/>
      </div>
    </div>
  );
};

export default LandingPage;
