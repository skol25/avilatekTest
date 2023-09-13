import React from 'react';
import { RedLineProps } from '../../types/components/redLine';

const IconsLine: React.FC<RedLineProps> = ({ socialMediaIcons }) => (
  <div className=" flex items-center justify-end">
    {socialMediaIcons &&
      socialMediaIcons?.map((icon, index) => (
        <div key={index} className="mr-2">
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-6 w-6 text-gray-500"
            />
          </a>
        </div>
      ))}
  </div>
);

export default IconsLine;