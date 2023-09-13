import React from 'react';

const TitleSections = ({ smallText, largeText }) => (
  <div className="text-left">
    <p className="text-14px text-[#867D77]">{smallText}</p>
    <p className="text-2xl font-bold text-[#E2081E]">{largeText}</p>
  </div>
);

export default TitleSections;
