import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
        <Link to="/"> Math Magicians </Link>
        <div className='links'>
        <Link to="/"> Home </Link>
          <Link to="/Calculator">Calculator </Link>
          <Link to="/Quotes">Quotes</Link>
        </div>
    </div>
  );
};

export default NavBar;