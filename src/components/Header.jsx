import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section>
      <nav className='flex justify-between bg-green-800 h-24 w-full'>
        <Link to='/'>
          <img src={logo} alt='' className='w-[10em] pl-3 pt-1' />
        </Link>
        <ul className='flex justify-center items-center gap-5 px-10'>
          <li>
            <Link to='/' className='text-gray-300 text-xl '>
              Home
            </Link>
          </li>
          <li>
            <Link to='/characters'>Characters</Link>
          </li>
          <li>
            <Link to='/episodes'>Episodes</Link>
          </li>
          <li>
            <Link to='/quotes'>Quotes</Link>
          </li>
          <li>
            <Link to='/deaths'>Deaths</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
