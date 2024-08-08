import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <header className="px flex justify-between items-center mb-20">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <img src={logo} alt="Primary inbox logo" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-2xl font-poppins text-white">Primary Inbox</span>
      </div>
      <div className='bg-white bg-opacity-5 w-90 p-4 rounded-full'>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:underline text-xl font-poppins text-white">Product</Link>
          <Link to="/" className="hover:underline text-xl font-poppins text-white">Pricing</Link>
          <Link to="/" className="hover:underline text-xl font-poppins text-white">Integration</Link>
        </nav>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="w-48 h-16 px-6 py-3 rounded-full bg-transparent text-white-600 text-xl font-poppins border-2 border-white">Login</Link>
        <Link to="/signup" className="w-48 h-16 px-6 py-3 rounded-full bg-transparent text-white-600 text-xl font-poppins border-2 border-white">Sign Up</Link>
      </div>
    </header>
  );
};

export default Navbar;