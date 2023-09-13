import React from 'react';
import Product from '../product';

interface SectionAddProps {
  image: string;
  productsData: {
    image: string;
    title: string;
    rating: number;
    price: number;
  }[];
  invertirPosiciones?: boolean;
}

const SectionAdd: React.FC<SectionAddProps> = ({
  image,
  productsData,
  invertirPosiciones,
}) => {
  const imagePosition = invertirPosiciones ? 'order-2' : 'order-1';
  const productsPosition = invertirPosiciones ? 'order-1' : 'order-2';

  return (
    <div className="flex gap-6">
      <div className={`w-1/4 ${imagePosition}`}>
        <img
          src={image}
          alt="Imagen de la oferta"
          className="w-full h-1/2 object-cover h-[733px]"
        />
      </div>
      <div className={`w-3/4 ${productsPosition}`}>
        <div className="grid grid-cols-3 gap-4">
          {productsData &&
            productsData.map((product, index) => (
              <div key={index} className="w-20">
                <Product
                  key={index}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionAdd;
