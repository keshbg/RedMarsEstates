import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Logo</Link>
        </div>
        <nav className="hidden md:flex space-x-20">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="hover:text-gray-300 focus:outline-none flex items-center"
            >
              Services <span className="ml-1">▾</span>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
                <Link to="/services/house" className="block px-4 py-2 hover:bg-gray-600">House Findings</Link>
                <Link to="/services/lettings" className="block px-4 py-2 hover:bg-gray-600">Lettings</Link>
                <Link to="/services/mortgages" className="block px-4 py-2 hover:bg-gray-600">Mortgages</Link>
                <Link to="/services/solicitor" className="block px-4 py-2 hover:bg-gray-600">Solicitor</Link> </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden">
         <Link to="/services/house" className="block px-4 py-2 hover:bg-gray-600">House Findings</Link>
                <Link to="/services/lettings" className="block px-4 py-2 hover:bg-gray-600">Lettings</Link>
                <Link to="/services/mortgages" className="block px-4 py-2 hover:bg-gray-600">Mortgages</Link>
                <Link to="/services/solicitor" className="block px-4 py-2 hover:bg-gray-600">Solicitor</Link> <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="block px-4 py-2 w-full text-left hover:bg-gray-700 focus:outline-none flex items-center"
            >
              Services <span className="ml-1">▾</span>
            </button>
            {isServicesOpen && (
              <div className="bg-gray-700">
                <Link to="/services/house" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>House</Link>
                <Link to="/services/mortgage" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>Mortgage</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
