import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-2xl font-bold">Sabko Bazzar</Link>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-5">
              <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-md bg-white">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="px-2 py-1 rounded-md text-gray-800 outline-none w-[600px]"
                />
                
              </form>
             
            </div>
          <div className="hidden md:flex md:space-x-4">
            <Link to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700">Login</Link>
            <Link to="/signup" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700">Signup</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           
            <Link 
              to="/login" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
