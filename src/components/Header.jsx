import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className='flex justify-between bg-green-800 h-24'>
          <NavLink to='/'>
            <img src={logo} alt='' className='bg-white h-full' />
          </NavLink>
          <ul className='flex justify-center items-center gap-5 px-10'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 bg-white text-xl font-semibold rounded"
                    : "text-white text-xl font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='characters'
                className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to='episodes'
                className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
              >
                Episodes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='quotes'
                className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
              >
                Quotes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='deaths'
                className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
              >
                Deaths
              </NavLink>
            </li>
            <li>
              <NavLink
                to='about'
                className='text-white text-xl font-semibold hover:bg-white hover:text-green-800 rounded'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
