import React, { useState } from 'react';
import { PButtonProps } from '../../types/components/pButton';

const PButton = ({
  buttonType = 'primary',
  onClick,
  text,
  disable,
  className,
  imageSrc,
}: PButtonProps) => {
  const [clickPressed, setClickPressed] = useState(false);

  const handleClickDown = () => {
    setClickPressed(true);
  };

  const handleClickUp = () => {
    setClickPressed(false);
  };

  const handleClickLeave = () => {
    setClickPressed(false);
  };

  const colorButton = `
    ${
      buttonType === 'primary'
        ? 'text-white bg-[#E2081E] hover:bg-red-400'
        : 'text-red-500 bg-white hover:text-white hover:bg-red-500'
    }
  `;

  // Definiendo EL PButton
  return (
    <button
      type="button"
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      onMouseLeave={handleClickLeave}
      onClick={onClick}
      disabled={disable}
      className={`h-10 px-4 rounded font-medium ${className} ${colorButton} flex items-center justify-center`}
    >
      {imageSrc && <img src={imageSrc} alt="Icono" className="w-4 h-4 mr-2" />}
      {/* Mostrar la imagen si está presente */}
      {text && <p className={`mx-2 ${clickPressed && 'text-white'}`}>{text}</p>}
    </button>
  );
};

export default PButton;
