import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section>
      <nav className='flex justify-between bg-green-800 h-24'>
        <Link to='/'>
          <img src={logo} alt='' className='bg-white h-full' />
        </Link>
        <ul className='flex justify-center items-center gap-5 px-10'>
          <li>
            <Link
              to='/'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/characters'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              to='/episodes'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              Episodes
            </Link>
          </li>
          <li>
            <Link
              to='/quotes'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              Quotes
            </Link>
          </li>
          <li>
            <Link
              to='/deaths'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              Deaths
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
