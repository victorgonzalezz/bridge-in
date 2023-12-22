import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar navbar-expand-md navbar bg-dark'>
      <div className='navbar-nav mr-auto d-flex gap-4'>
        <NavLink className='btn btn-primary bg-dark border' to='/'>Home</NavLink>
        <div className="btn-group">
          <button type="button" className="btn btn-dark border border-end-0">Teams</button>
          <button type="button" className="btn btn-dark border border-start-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/teams">All Teams</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-dark border border-end-0">Players</button>
          <button type="button" className="btn btn-dark border border-start-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/players">All Players</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-dark border border-end-0">Games</button>
          <button type="button" className="btn btn-dark border border-start-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/games">All Games</a></li>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
