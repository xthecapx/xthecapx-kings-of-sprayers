import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3>{'About king Sprayers'}</h3>
            <p>
              {`Kings Sprayers has been building sprayers for more than 30 years.

            Serving the Lawn & Landscape, Pest Control, Agricultural, Golf &
            Recreation, and Horticultural industries, Kings Sprayers offers high
            quality and reliable sprayers for all your spraying needs.`}
            </p>
          </div>
          <div className="column">
            <h3>{'Products & Resources'}</h3>
            <ul className="kos__menu">
              <li className="kos__menu__item">
                <Link to="/" className="kos__menu__anchor">
                  {'3 Point Hitch Sprayers'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link className="kos__menu__anchor" to="/about">
                  {'Skid Sprayers'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link className="kos__menu__anchor" to="/products">
                  {'2 Wheel Sprayers'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link className="kos__menu__anchor" to="/contact/examples">
                  {'4 Wheel Sprayers'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link className="kos__menu__anchor" to="/contact/examples">
                  {'Spot Sprayers'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link className="kos__menu__anchor" to="/contact/examples">
                  {'Part & Accesories'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <a
                  className="kos__menu__anchor"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Product Manuals'}
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>{'Customer Service'}</h3>
            <ul className="kos__menu">
              <li className="kos__menu__item">
                <Link to="/" className="kos__menu__anchor">
                  {'Contact us'}
                </Link>
              </li>
              <li className="kos__menu__item">
                <Link to="/" className="kos__menu__anchor">
                  {"FAQ's"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>{'Connect with King Sprayers'}</h3>
            <p>{`Stay in touch with King Sprayers by following us on social media!`}</p>
            <div>
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="vimeo" href="https://vimeo.com">
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>

            <hr />
            <p>{'7800 N. Orange Blossom Trail, Orlando, FL 32810'}</p>
            <p>{'Phone: (800) 228-0905 | Fax: (407) 886-1616'}</p>
            <p>{'Email: info@kingssprayers.com'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
