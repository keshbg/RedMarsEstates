import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white p-4">
      <div className="container mx-auto text-center md:text-left">
        <div className="md:flex md:justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Contact Now</h3>
            <p><span role="img" aria-label="address">📍</span>Aldershot, UK</p>
            <p><span role="img" aria-label="mobile">📱</span>+447919492312</p>
            <p><span role="img" aria-label="email">📧</span> info@redmarsestate.co.uk</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Mortgage Services</h3>
            <ul className="list-disc list-inside">
              <li>House Findings</li>
              <li>Lettings</li>
              <li>Mortgages</li>
              <li>Solicitor</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
            <p>Mon - Fri: 9am to 6pm</p>
            <p>Sat: 10am to 4pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="md:flex md:justify-between mt-4">
          <div>
            <ul className="flex justify-center md:justify-start space-x-4 mb-4">
              <li><Link to="/policy" className="hover:text-gray-300">Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-gray-300">Terms and Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
            <ul className="flex justify-center md:justify-start space-x-4 mb-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 md:font-bold">
          <p className="text-sm md:text-base font-bold">
            "YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE"
          </p>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 KRy Inc, Red Mars Estates Ltd</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
