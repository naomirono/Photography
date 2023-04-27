import React from 'react';
import portraitPhoto from '../assets/POT1.JPG';
import familyPortrait from '../assets/F1.JPG';

const photos = [
  { src: portraitPhoto, width: 'w-1/2', height: 'h-64' },
  { src: familyPortrait, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/2', height: 'h-64' },
  { src: portraitPhoto, width: 'w-1/2', height: 'h-64' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/2', height: 'h-64' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/2', height: 'h-64' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
  { src: portraitPhoto, width: 'w-1/4', height: 'h-96' },
];

const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {photos.map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          className={`object-cover ${photo.width} ${photo.height}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
