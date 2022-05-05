import React from 'react';
import { RiCoinsLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <RiCoinsLine className='icon' />
        <h1>Top #100 Crypto</h1>
      </div>
    </Link>
  );
};

export default NavBar;
