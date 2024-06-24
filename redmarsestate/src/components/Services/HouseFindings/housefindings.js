import React from 'react';
import findings from '../../../assets/findings.png'; 
import { houseFindingText } from '../../../texts/Text';

const HouseFindings = () => {
  return (
    <main className="container mx-auto p-4 mb-20"> 
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2">
          <img src={findings} alt="House" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
          <h1 className="text-3xl font-bold mb-4">House Findings</h1>
          <p className="text-lg leading-relaxed">
           {houseFindingText}
             </p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default HouseFindings;
