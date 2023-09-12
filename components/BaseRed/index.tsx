import React from 'react';
import { RedLineProps } from '../../types/components/redLine';
import IconsLine from '../IconsLine';

const RedLine: React.FC<RedLineProps> = ({ socialMediaIcons }) => (
  <div className="bg-red-500  p-2 w-full pl-4 pr-4">
    <IconsLine socialMediaIcons={socialMediaIcons} />
  </div>
);

export default RedLine;
