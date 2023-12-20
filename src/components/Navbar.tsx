import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/team'>Team</NavLink>
      <NavLink to='/player'>Player</NavLink>
    </nav>
  );
};

export default Navbar;
