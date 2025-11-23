import React from 'react';

const SubTitle = ({ text1, text2 }) => {
  return (
    <div className="flex sm:flex-row flex-col items-center sm:items-start mt-8 sm:mt-12">
     
    

      {/* Title text */}
      <p className="text-white text-2xl sm:text-4xl font-bold tracking-wide  sm:text-left ml-2 text-center">
        {text1} <span className="text-white">{text2}</span>
      </p>

      {/* Subtle underline */}
    
    </div>
  );
};

export default SubTitle;
