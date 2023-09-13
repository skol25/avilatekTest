import React from 'react';

const RedLineBottom: React.FC<div> = () => (
  <>
    <div className="flex justify-between pl-4 pr-4">
      <img
        src="/assets/icons/Doghouse.svg"
        alt="home"
        className="h-10 w-10 text-gray-500"
      />
      <img
        src="/assets/icons/Tree.svg"
        alt="home"
        className="h-10 w-10 text-gray-500"
      />
    </div>
    <div className="bg-[#E2081E] flex justify-center p-2 w-full pl-4 pr-4">
      <h2 className="text-[#FEFEFE]">
        Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
        por Avila Tek
      </h2>
      <img
        src="/assets/icons/svgg.svg"
        alt="home"
        className="h-6 w-6 text-gray-500"
      />
    </div>
  </>
);

export default RedLineBottom;
