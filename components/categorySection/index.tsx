import React from 'react';

const CategorySection = ({ data }) => (
  <div className="flex justify-around items-center space-y-4">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.text}
          className="max-w-full h-auto"
        />
        <p className="text-center">{item.text}</p>
      </div>
    ))}
  </div>
);

export default CategorySection;
