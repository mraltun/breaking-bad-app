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
                className='text-white text-xl font-semibold hover:border-b-4'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='characters'
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-white text-xl font-semibold "
                    : "hover:border-b-4 text-white text-xl font-semibold "
                }
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to='episodes'
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-white text-xl font-semibold "
                    : "hover:border-b-4 text-white text-xl font-semibold "
                }
              >
                Episodes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='quotes'
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-white text-xl font-semibold "
                    : "hover:border-b-4 text-white text-xl font-semibold "
                }
              >
                Quotes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='deaths'
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-white text-xl font-semibold "
                    : "hover:border-b-4 text-white text-xl font-semibold "
                }
              >
                Deaths
              </NavLink>
            </li>
            <li>
              <NavLink
                to='about'
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-white text-xl font-semibold "
                    : "hover:border-b-4 text-white text-xl font-semibold "
                }
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
