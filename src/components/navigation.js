import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navigation.css';

function Navbar({ books = '', categories = '' }) {
  return (
    <nav>
      <div className="nav-main">
        <h2 className="logo">BookStore CMS</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to={books} activeClassName="active">BOOKS</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={categories} activeClassName="active">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <div className="profile-tab">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  books: PropTypes.string,
  categories: PropTypes.string,
};

export default Navbar;
