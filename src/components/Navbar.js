import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState({
    active: false,
    navBarActiveClass: ''
  });

  const toggleHamburger = () => {
    setMenuStatus(state => {
      const newActive = !state.active;

      return {
        navBarActiveClass: newActive ? 'is-active' : '',
        active: newActive
      };
    });
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${menuStatus.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${menuStatus.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/sprayers">
              Sprayers
            </Link>
            <Link className="navbar-item" to="/dealers">
              Dealers
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
