import React from 'react';

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
      <h2 className="text-sm font-semibold mt-2">{title}</h2>
      <div className="flex items-center mt-1">
        <div className="flex">
          {filledStarsArray}
          {emptyStarsArray}
        </div>
        <span className="ml-1 text-gray-600">({rating})</span>
      </div>
      <div className="mt-1">
        <span className="text-base font-semibold">${price}</span>
      </div>
      <button className="mt-1 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Comprar
      </button>
    </div>
  );
};

export default Product;
