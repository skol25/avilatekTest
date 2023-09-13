import { useState } from 'react';
import Typography from '@components/Typography';
import { PButtonProps } from '../../types/components/pButton';

const PButton = ({
  buttonType = 'primary',
  onClick,
  text,
  disable,
  className,
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
        ? 'text-white bg-red-500 hover:bg-red-400'
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
      className={`h-10 px-4 rounded font-medium ${className} ${colorButton}`}
    >
      <div className="flex items-center justify-center">
        {text && (
          <Typography
            text={text}
            className={`mx-2 ${clickPressed && 'text-white'}`}
          />
        )}
      </div>
    </button>
  );
};

export default PButton;
