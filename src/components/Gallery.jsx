import React from 'react';
import Photo2 from '../assets/F1.JPG';
import Photo3 from '../assets/F2.JPG';
import Photo4 from '../assets/POT1.JPG';
import Photo5 from '../assets/photo5.JPG';
import Photo6 from '../assets/photo6.JPG';
import Photo7 from '../assets/photo.JPG';
import Photo8 from '../assets/wed.jpg';
import Photo9 from '../assets/photo9.jpg';
import Photo10 from '../assets/photo10.jpg'
import Photo11 from '../assets/photo11.jpg'
import Photo12 from '../assets/photo12.jpg'



const photos = [
  { src: Photo7, width: 'w-1/2', height: 'h-96' },
  { src: Photo9, width: 'w-1/4', height: 'h-96'},
  { src: Photo11, width: 'w-1/4', height: 'h-96' },
  { src: Photo4, width: 'w-1/4', height: 'h-96' },
  { src: Photo5, width: 'w-1/4', height: 'h-96' },
  { src: Photo2, width: 'w-1/4', height: 'h-96' },
  { src: Photo6, width: 'w-1/2', height: 'h-96' },
  { src: Photo3, width: 'w-1/4', height: 'h-96' },
  { src: Photo12, width: 'w-1/4', height: 'h-96' },
  { src: Photo10, width: 'w-1/4', height: 'h-96' },
  { src: Photo8, width: 'w-3/4', height: 'h-96' },
  
];

const Gallery = () => {
  return (
      <div className='bg-gray-100'>
          <h2 className="text-4xl font-bold pt-[32px] text-black ">Our <span className='text-orange-400'>Gallery</span>  </h2>
    <div className="flex flex-wrap justify-center items-center gap-4 py-12">
      {photos.map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          className={`object-cover ${photo.width} ${photo.height}`}
        />
      ))}
    </div>
    </div>
  );
};

export default Gallery;
