/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  // Estado para rastrear el índice actual
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');

  // Función para cambiar al índice seleccionado
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setCurrentImage(slides[index].image);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 transition-transform ease-in-out duration-300">
          {slides.map((slide, index: number) => (
            <div
              key={index}
              className={`w-full h-[450px] flex-shrink-0 relative ${
                currentIndex === index
                  ? 'transform translate-x-0' // Si es el índice actual, muestra la imagen
                  : 'transform translate-x-1' // Si no es el índice actual, oculta la imagen
              }`}
            >
              <img
                src={currentImage === '' ? slide.image : currentImage}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 space-x-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)} // Cambia al índice seleccionado al hacer clic
            className={`w-16 h-2   rounded-full cursor-pointer transition-transform ${
              currentIndex == +index ? 'scale-125 bg-[#E2081E]' : 'bg-gray-300' // Resalta el indicador si es el índice actual
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
