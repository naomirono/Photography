import React from 'react';

const photos = [
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo13.jpg', width: 'w-full md:w-1/2 lg:w-1/2', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo9.jpg', width: 'w-full md:w-1/4 lg:w-1/4', height: 'h-96'},
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo11.jpg', width: 'w-full md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/POT1.JPG', width: 'w-full md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo5.jpg', width: 'w-full md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/F1.JPG', width: 'w-1/4 md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo6.jpg', width: 'w-full md:w-1/2 lg:w-1/2', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/F2.JPG', width: 'w-1/4 md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo12.jpg', width: 'w-1/4 md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/photo10.jpg', width: 'w-1/4 md:w-1/4 lg:w-1/4', height: 'h-96' },
  { src: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/wed.JPG', width: 'w-full md:w-3/4 lg:w-3/4', height: 'h-96' },
];

const Gallery = () => {
  return (
      <div className='bg-gray-100 mt-20'>
          <h2 className="text-4xl font-bold pt-[32px] text-black ">Our <span className='text-orange-400'>Gallery</span>  </h2>
    <div className="flex flex-wrap justify-center items-center gap-4 py-12 px-4">
    {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt=""
            className={`object-cover ${photo.width} ${photo.height} ${index > 4 ? 'hidden md:block' : ''}`}
          />
        ))}
    </div>
    </div>
  );
};

export default Gallery;
