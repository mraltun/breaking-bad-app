import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className=''>
        <h2 className=''>Breaking Bad</h2>
        <ul className=''>
          <li>
            <Link to='/'>Home</Link>
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
      </div>
    </section>
  );
};

export default Header;
