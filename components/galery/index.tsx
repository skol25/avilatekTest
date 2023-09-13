import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <div className="flex">
    {images.map((image, index) => (
      <div
        key={index}
        className={`w-${100 / images.length} ${
          images.length === 1 ? 'flex-1' : ''
        }`}
      >
        <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
      </div>
    ))}
  </div>
);

export default ImageGallery;
