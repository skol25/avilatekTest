import React from 'react';

interface ServiceProps {
  image: string;
  title: string;
  subtitle: string;
}

const Service: React.FC<ServiceProps> = ({ image, title, subtitle }) => (
  <div className="flex flex-row items-center">
    <div className="">
      <img src={image} alt={title} className="w-20 h-20" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm font-regular">{subtitle}</p>
    </div>
  </div>
);

export default Service;
