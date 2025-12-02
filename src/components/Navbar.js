import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'CV', path: '/cv' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <RouterLink to="/" className="text-white font-semibold text-xl">
                Paul Ferrol
              </RouterLink>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {menuItems.map((item) => (
                <RouterLink
                  key={item.text}
                  to={item.path}
                  className="text-white hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.text}
                </RouterLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-light focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} sm:hidden bg-primary-dark`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <RouterLink
                key={item.text}
                to={item.path}
                className="text-white hover:bg-primary-light hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.text}
              </RouterLink>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-16" /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;