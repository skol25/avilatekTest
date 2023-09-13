import React from 'react';
import PButton from '../PButton';

interface ProductProps {
  image: string;
  title: string;
  rating: number;
  price: number;
}

const Product: React.FC<ProductProps> = ({ image, title, rating, price }) => {
  const maxRating = 5;
  const filledStars = Math.min(rating, maxRating);

  // Renderiza las estrellas llenas en color B5B0AD
  const filledStarsArray = Array.from({ length: filledStars }).map(
    (_, index) => (
      <img
        key={index}
        src="/assets/icons/Dogpaw.svg"
        alt="Estrella"
        className="h-4 w-4 text-B5B0AD"
      />
    )
  );

  // Renderiza las estrellas vacías en color DAD6D3 (si corresponde)
  const emptyStarsArray = Array.from({ length: maxRating - filledStars }).map(
    (_, index) => (
      <img
        key={index}
        src="/assets/icons/Dogpaw.svg"
        alt="Estrella"
        className="h-4 w-4 text-DAD6D3"
      />
    )
  );

  return (
    <div className="bg-white rounded-md shadow-md p-2 w-40">
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <h2 className="text-sm font-medium text-[#333333] mt-2">{title}</h2>
      <div className="flex items-center mt-1">
        <div className="flex">
          {filledStarsArray}
          {emptyStarsArray}
        </div>
        <span className="ml-1 text-gray-600" />
      </div>
      <div className="mt-1">
        <span className="text-sm font-light text-[#5F5F5F]">${price}</span>
      </div>
      {/* Reemplaza el botón actual con el componente PButton */}
      <PButton
        buttonType="primary"
        text="Comprar"
        imageSrc="/assets/icons/ShoppingcartIcon.svg"
        onClick={() => {
          // Tu función de clic aquí
        }}
      />
    </div>
  );
};

export default Product;
