import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import BlueLogo from '../Logo/Blue';
import WhiteLogo from '../Logo/White';
import { UIContext } from '../../resources/UI';

const Navbar = ({ fixed, blueLogo, blueItem }) => {
  const [menuStatus, setMenuStatus] = useState({
    active: false,
    navBarActiveClass: ''
  });
  const { isSticky } = useContext(UIContext);
  const toggleHamburger = () => {
    setMenuStatus(state => {
      const newActive = !state.active;

      return {
        navBarActiveClass: newActive ? 'is-active' : '',
        active: newActive
      };
    });
  };
  const stickyClass = () => {
    if (fixed) {
      return 'is-sticky';
    }

    if (isSticky) {
      return 'is-sticky';
    }

    return '';
  };

  return (
    <nav
      className={`navbar is-transparent ${stickyClass()} ${blueItem ? 'blue-item' : ''}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <Grid container className="container" alignContent="center">
        <Grid item xs={2}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {isSticky || blueLogo ? <BlueLogo /> : <WhiteLogo />}
            </Link>
            <div
              role="button"
              className={`navbar-burger burger ${menuStatus.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div
            id="navMenu"
            className={`navbar-menu ${menuStatus.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered navbar-menu-container">
              <Link
                className="navbar-item"
                to="/"
                activeClassName="navbar-item--active"
              >
                Home
              </Link>
              <Link
                className="navbar-item"
                to="/about"
                activeClassName="navbar-item--active"
              >
                About
              </Link>
              <Link
                className="navbar-item"
                to="/sprayers"
                activeClassName="navbar-item--active"
              >
                Sprayers
              </Link>
              <Link
                className="navbar-item"
                to="/dealers"
                activeClassName="navbar-item--active"
              >
                Dealers
              </Link>
              <Link
                className="navbar-item"
                to="/contact"
                activeClassName="navbar-item--active"
              >
                Contact Us
              </Link>
              <hr className="navbar-line" />
            </div>
          </div>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
