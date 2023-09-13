/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line import/extensions
import { RedLineProps } from '../../types/components/redLine';
import IconsLine from '../IconsLine';
import CustomButton from '../inputSelect';

const options = ['Opción 1', 'Opción 2', 'Opción 3'];
const defaultText = 'Seleccione una opción';
const RedLine: React.FC<RedLineProps> = ({ socialMediaIcons }) => (
  <div className="bg-[#E2081E] flex justify-end p-2 w-full pl-4 pr-4">
    <div className="mr-6">
      <CustomButton />
    </div>
    <IconsLine socialMediaIcons={socialMediaIcons} iconColor="" />
  </div>
);

export default RedLine;
