import React from 'react';
import fullmanaged from '../../../assets/fullmanaged.jpg'; 
import letonly from '../../../assets/letonly.jpg'; 
import housefindings from '../../../assets/housefindings.jpg'
import { lettingsTitle, lettingsService,fullyManaged, rentCollection, letOnly } from '../../../texts/Text';

const Lettings = () => {
  return (
    <main className="container mx-auto p-4 mb-20"> 
      <h1 className="text-3xl font-bold mb-4">{lettingsTitle}</h1>
      <p className="text-lg leading-relaxed mb-8">
        {lettingsService}
       </p>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex-1">
          <img src={fullmanaged} alt="Fully Managed" className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Fully Managed</h2>
          <p>
            {fullyManaged}
          </p>
        </div>
        <div className="flex-1">
          <img src={housefindings} alt="Rent Collection" className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Rent Collection</h2>
          <p>
            {rentCollection}
          </p>
        </div>
        <div className="flex-1">
          <img src={letonly} alt="Let Only" className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Let Only</h2>
          <p>
            {letOnly}
           </p>
        </div>
      </div>
    </main>
  );
};

export default Lettings;