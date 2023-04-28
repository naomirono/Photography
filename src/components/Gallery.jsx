import React from 'react';
import portraitPhoto from '../assets/POT1.JPG';
import familyPortrait from '../assets/F1.JPG';

const photos = [
  { src: portraitPhoto, width: 'w-1/2', height: 'h-96' },
  { src: familyPortrait, width: 'w-1/4', height: 'h-96'},
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/2', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-3/4', height: 'h-96' },
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
