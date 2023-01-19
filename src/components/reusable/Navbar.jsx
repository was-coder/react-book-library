import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <h1 className="nav__logo__h1">
            <NavLink to="/" className="link nav__logo__h1__link">
              Bookstore CMS
            </NavLink>
          </h1>
        </div>
        <ul className="nav__ul">
          <li className="nav__ul__li">
            <NavLink to="/" className="nav__ul__li__link link">
              Books
            </NavLink>
          </li>
          <li className="nav__ul__li">
            <NavLink to="/categories" className="nav__ul__li__link link">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default NavBar;
