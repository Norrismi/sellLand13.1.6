"use client";
import React, { useState } from 'react';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-center mb-2 md:mb-0 md:ml-4">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 " />
      </div>
      <div className="md:hidden flex">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-md focus:outline-none focus:bg-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} mt-2 md:mt-0 md:block`}>
        <button className="text-white hover:text-pink-500 block md:inline-block px-4 py-2">Home</button>
        <button className="text-white hover:text-pink-500 block md:inline-block px-4 py-2">About</button>
        <button className="text-white hover:text-pink-500 block md:inline-block px-4 py-2">Services</button>
        <button className="text-white hover:text-pink-500 block md:inline-block px-4 py-2">Contact</button>
      </div>
    </nav>
  );
};



export default Navigation;
