import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center mt-4">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex justify-center items-center mt-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 mx-2 rounded-full focus:outline-none ${
              currentIndex === index
                ? 'bg-E2081E focus:bg-E2081E'
                : 'bg-DAD6D3 focus:bg-DAD6D3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
