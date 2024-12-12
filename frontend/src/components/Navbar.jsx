import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className="flex flex-col bg-white shadow-md">
      {/* Navbar Section */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-12 sm:h-14"/>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex md:space-x-6 text-[#1f7894] space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="connections">Connections</Link>
          <Link to="/message">Messaging</Link>
          <Link to="/query">Post Your Query</Link>
          <Link to="/notifications">Notifications</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex space-x-4 md:text-sm">
          <Link to="/signup">
            <button className="bg-[#1f7894] text-white px-4 py-2 rounded-full hover:bg-[#1988ab]">
              Sign up
            </button>
          </Link>
          <Link to="/login">
            <button className="border px-4 py-2 rounded-full border-[#1988ab] hover:bg-[#1f7894] hover:text-white">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          {openMenu ? <X className="size-6 text-[#1f7894]" /> : <Menu className="size-6 text-[#1f7894]" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white sm:hidden transition-max-height duration-300 ${openMenu ? 'max-h-[350px]' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-[#1f7894] text-sm mt-[-18px]">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/connections" onClick={toggleMenu}>
            Connections
          </Link>
          <Link to="/message" onClick={toggleMenu}>
            Messaging
          </Link>
          <Link to="/query" onClick={toggleMenu}>
            Post Your Query
          </Link>
          <Link to="/notifications" onClick={toggleMenu}>
            Notifications
          </Link>
        </ul>
        <div className="flex flex-col space-y-4 p-4 text-sm">
        <Link to="/signup">
            <button className="bg-[#1f7894] text-white px-4 py-2 w-full rounded-full hover:bg-[#1988ab]">
              Sign up
            </button>
          </Link>
          <Link to="/login">
            <button className="border px-4 py-2 rounded-full border-[#1988ab] w-full hover:bg-[#1f7894] hover:text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header >
  );
};

export default Navbar;



