import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-red-800 text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold">
          <img 
            src={require('../../assets/RED MARS LOGO.png')}
            alt="Profile" 
            className="w-16 h-16 object-cover mr-2"
          />
          <Link to="/">Reds Mars Estates</Link>
        </div>
        <nav className="hidden md:flex space-x-20">
          <Link to="/" className="hover:text-gray-300 font-mono text-xl">HOME</Link>
          <Link to="/about" className="hover:text-gray-300 font-mono text-xl">ABOUT</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="hover:text-gray-300 focus:outline-none flex items-center font-mono text-xl"
            >
              SERVICES <span className="ml-1">▾</span>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg z-50">
                <Link to="/services/housefindings" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>House Findings</Link>
                <Link to="/services/lettings" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>Lettings</Link>
                <Link to="/services/mortgages" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>Mortgages</Link>
                <Link to="/services/solicitor" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsServicesOpen(false)}>Solicitor</Link> 
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-gray-300 font-mono text-xl">CONTACT</Link>
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
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services/housefindings" className="block px-4 py-2 hover:bg-gray-700" onClick={() => { setIsOpen(false); }}>House Findings</Link>
          <Link to="/services/lettings" className="block px-4 py-2 hover:bg-gray-700" onClick={() => { setIsOpen(false); }}>Lettings</Link>
          <Link to="/services/mortgages" className="block px-4 py-2 hover:bg-gray-700" onClick={() => { setIsOpen(false); }}>Mortgages</Link>
          <Link to="/services/solicitor" className="block px-4 py-2 hover:bg-gray-700" onClick={() => { setIsOpen(false); }}>Solicitor</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
