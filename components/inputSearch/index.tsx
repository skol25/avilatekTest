import React, { useState } from 'react';
import { InputSearchProps } from '../../types/components/inputSearch';
import IconsLine from '../IconsLine';

const InputSearch: React.FC<InputSearchProps> = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center border rounded overflow-hidden">
      <input
        type="text"
        placeholder="Buscar"
        className="focus:outline-none active:outline-none border-none outline-none px-3 py-2 text-base text-C8C2BE"
        value={inputValue}
        onChange={handleInputChange}
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)} // Seleccionar todo al hacer clic
      />

      <img
        src="/assets/icons/Search.svg"
        alt="Icono de búsqueda"
        className="h-4 w-4 text-gray-500 m-2"
      />
    </div>
  );
};

export default InputSearch;
