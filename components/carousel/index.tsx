import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  // Estado para rastrear el índice actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar al índice seleccionado
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 transition-transform ease-in-out duration-300">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-[450px] flex-shrink-0 relative ${
                currentIndex === index
                  ? 'transform translate-x-0' // Si es el índice actual, muestra la imagen
                  : 'transform translate-x-full' // Si no es el índice actual, oculta la imagen
              }`}
            >
              <img
                src={slide.image}
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
            className={`w-16 h-2 mr-3 bg-gray-300 rounded-full cursor-pointer transition-transform ${
              currentIndex === index ? 'scale-125 bg-[#E2081E]' : '' // Resalta el indicador si es el índice actual
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
