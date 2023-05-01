import React from 'react';
import { Link } from 'react-router-dom';
import weddingPhoto from '../assets/photo12.jpg';
import familyPortrait from '../assets/F1.JPG';
import commercialPhoto from '../assets/commercial.JPG';
import engagementPhoto from '../assets/E1.JPG';
import eventPhoto from '../assets/birthday.jpg';
import portraitPhoto from '../assets/potrait.jpg';


function Services() {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'We specialize in capturing the magic and beauty of your special day. Our experienced photographers will work with you to create stunning images that you will cherish for a lifetime.',
      image: weddingPhoto,
      priceRange:"$1000-$5000",
      link: '/services/wedding'
    },
    {
      title: 'Family Portraits',
      description: 'Our family portrait sessions are designed to capture the love and joy that your family shares. We will work with you to create beautiful, natural images that you will treasure for years to come.',
      image: familyPortrait,
      priceRange:"$200-$1000",
      link: '/services/family'
    },
    {
      title: 'Commercial Photography',
      description: 'We offer a range of commercial photography services, including product photography, headshots, and event coverage. Our photographers will work closely with you to create images that showcase your brand and tell your story.',
      image: commercialPhoto,
      priceRange:"$100-$2000",
      link: '/services/commercial'
    },
    {
      title: 'Engagement Photography',
      description: 'Our engagement photography sessions are designed to capture the love and connection between you and your partner. We will work with you to create images that are unique to your relationship and showcase your personalities.',
      image: engagementPhoto,
      priceRange:"$1000-$5000",
      link: '/services/engagement'
    },
    {
      title: 'Event Photography',
      description: 'From birthday parties to corporate events, we offer event photography services that capture the excitement and energy of your special occasion. Our photographers will work tirelessly to ensure that every moment is captured.',
      image: eventPhoto,
      priceRange:"$1000-$5000",
      link: '/services/event'
    },
    {
      title: 'Portrait Photography',
      description: 'Our portrait photography sessions are designed to capture the unique personality of each individual. From high school seniors to professionals, we will work with you to create stunning images that showcase your style and personality.',
      image: portraitPhoto,
      priceRange:"$100-$800",
      link: '/services/portrait'
    },
  ];

  return (
    <div className='bg-gray-100 mt-20'>
    
      <h2 className="text-4xl font-bold pt-[32px] text-black ">Our <span className='text-orange-400'>Services</span>  </h2>
      
      <div className="flex flex-wrap justify-center  py-8  ">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/4  flex border border-[#fff] m-[20px] rounded-xl bg-[#fff]"
        >
        

          <Link
            to={service.link}
            className=" p-4 flex-1 flex flex-col"
          >
            <div className="rounded-xl overflow-hidden ">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[384px] rounded-xl  bg-gray-300 "
              />
            </div>
            <h3 className="text-lg font-bold mb-2 mt-[8px] text-black">{service.title}</h3>
            <p className="text-gray-700 text-base flex-1">{service.description}</p>

            <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {service.priceRange}
        </span>
      </div>


          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Services;
