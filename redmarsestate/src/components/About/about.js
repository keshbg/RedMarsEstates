
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Red Mars Estates</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src={require('../../assets/RED MARS LOGO.png')}
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover" 
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="text-lg leading-relaxed">
            <p className="text-2xl font-bold" >Specialists in residential sales and lettings in UK,</p>
            Red Mars Estates is an independent estate agency in London, UK who strive to make your property journey an enjoyable one. </p>
            <p className="text-lg leading-relaxed mt-4">
            But we’re not just any ordinary estate agent.
Red Mars Estates is run by a team who are passionate about property. We genuinely enjoy helping people move. We look after every client personally so are with you every step of the way - from the initial market appraisal to the day we hand over the keys. You could say we’re on a mission to change the way normal way of buying and selling property by our special customer service.
With unrivalled knowledge of local property market, a professional yet friendly manner and a caring and conscientious approach, we are well suited to meet and exceed your property needs. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
