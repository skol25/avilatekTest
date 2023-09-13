/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
import { RedLineProps } from '../../types/components/redLine';

const IconsLine: React.FC<RedLineProps> = ({
  socialMediaIcons,
  iconColor = 'text-white',
}) => (
  <div className="flex items-center justify-end space-x-4">
    {socialMediaIcons &&
      socialMediaIcons?.map((icon, index) => (
        <div key={index}>
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <img
              src={icon.src}
              alt={icon.alt}
              className={`h-5 w-5 ${iconColor}`}
            />
          </a>
        </div>
      ))}
  </div>
);

export default IconsLine;
