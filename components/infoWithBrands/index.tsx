import React from 'react';

interface InfoWithBrandsProps {
  text: string;
  brands: string[];
}

const InfoWithBrands: React.FC<InfoWithBrandsProps> = ({ text, brands }) => (
  <div className="flex items-center">
    <div className="w-1/4 text-sm text-[#333333] text-left">{text}</div>
    <div className="w-3/4 flex flex-wrap justify-end gap-6">
      {brands.map((brand, index) => (
        <img
          key={index}
          src={brand}
          alt={`Brand ${index + 1}`}
          className="h-16 w-auto"
        />
      ))}
    </div>
  </div>
);

export default InfoWithBrands;
