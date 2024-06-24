import React from 'react';
import { Link } from 'react-router-dom';

const Mortgages = () => {
  return (
    <main className="container mx-auto p-4 mb-20"> 
      <h1 className="text-3xl font-bold mb-4">Buying a Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Box */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-md mb-4">
          Red Mars Mortgage Advice are able to arrange your mortgage finance regardless of whether you are a first time buyer, home mover or looking to invest in property. We have a team of experienced advisers and dedicated case handlers who will take you through the purchasing process from start to finish.
          </p>
          <p className="text-md mb-4">
           As with all major decisions in life it’s good to know that you are taking professional advice and will have help and guidance with some of the associated questions that you may be facing for the first time. Whether it’s the repayment method, term of mortgage, rate type or associated costs we’ll be happy to advise you and make a recommendation once we’ve discussed your circumstances in detail.
          </p>
        </div>
        {/* Right Box */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-md">
          Advising on your property purchase doesn’t just stop with arranging the mortgage for you, we’re also able to recommend the correct personal protection and property protection for you. The excitement of moving into a new property can be short lived if you haven’t taken steps to protect your dependants and family.
          </p>
          <h2 className="text-xl font-bold mb-2 p-2">Why Choose Us?</h2>
          <p  className="text-md">
          Whether you’re an experienced landlord or just starting out, it’s likely you’ll have specialist requirements that set you apart from someone buying a residential property. We can access the major lenders in the buy to let market, including those specialising in lending to professional landlords and consumer buy to let.
          </p>
        </div>
      </div>
      {/* Contact Us Button */}
      <div className="flex justify-center mt-4">
        <Link to="/contact" className="bg-blue-500 text-white px-2 py-1 rounded-md text-center">
          Contact Us
        </Link>
      </div>
      {/* Bordered Div */}
      <div className="border-2 border-black mt-4 p-4">
        <p className="text-lg text-center">YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE</p>
      </div>
    </main>
  );
};

export default Mortgages;
