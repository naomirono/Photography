import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between h-auto md:h-[100vh] background bg-cover bg-no-repeat" style={{
      backgroundImage: `url('https://myretrobucket.s3.eu-north-1.amazonaws.com/bg.jpg')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-black bg-opacity-80 text-start">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-white mt-10 ml-6 md:mt-20 sm:pl-10">PHOTOGRAPHY</h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-orange-400 ml-6 sm:pl-10">STUDIO</h1>
        <h6 className="text-2xl md:text-3xl font-medium text-white pl-6 md:pl-16 pb-6">For All Services</h6>
        <p className="text-gray-400 ml-6 md:ml-16 text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae velit vel arcu ultricies lobortis. Donec quis consectetur purus. Nam in pharetra ipsum, vel placerat eros.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 ml-6 md:ml-16">
        <Link to="/contact">
        <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl mb-4 md:mb-0">Book Now</button>
        </Link>
          
          <div className='flex mt-4 md:mt-0'>
            <FaFacebook className="text-2xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer m-2 md:m-4 bg-white rounded-full p-1" />
            <FaTwitter className="text-2xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer m-2 md:m-4 bg-white rounded-full p-1" />
            <FaInstagram className="text-2xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer m-2 md:m-4 bg-white rounded-full p-1" />
            <FaYoutube className="text-2xl md:text-4xl text-red-500 hover:text-red-700 cursor-pointer m-2 md:m-4 bg-white rounded-full p-1" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-black bg-opacity-80 mt-20">
        <img src='https://myretrobucket.s3.eu-north-1.amazonaws.com/P4.png' alt="Camera" className="w-full h-auto md:h-full" style={{ maxHeight: '600px' }} />
      </div>
    </div>
  );
};






export default LandingPage;
