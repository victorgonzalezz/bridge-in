import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md d-flex justify-content-center">
      <div className="navbar-nav mr-auto d-flex gap-4">
        <NavLink to="/"></NavLink>
        <div className="btn-group">
          <button type="button" className="btn border border-end-0">
            Teams
          </button>
          <button
            type="button"
            className="btn border border-start-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/teams">
                All Teams
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn border border-end-0">
            Players
          </button>
          <button
            type="button"
            className="btn border border-start-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/players">
                All Players
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn border border-end-0">
            Games
          </button>
          <button
            type="button"
            className="btn border border-start-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/games">
                All Games
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
