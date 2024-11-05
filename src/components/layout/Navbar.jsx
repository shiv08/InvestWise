import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">InvestWise</h1>
          </div>

          {/* Empty space in middle */}
          <div className="flex-grow"></div>

          {/* Navigation Links and Auth Buttons together */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Stocks</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Mutual Funds</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">US Stocks</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">IPO</a>
            <button className="text-blue-600 font-semibold">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;