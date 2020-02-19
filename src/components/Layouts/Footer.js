import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import ListItem from '../UI/ListItem';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns kos__footer__columns">
          <div className="column">
            <h3 className="kos__footer__title">{'About king Sprayers'}</h3>
            <p className="kos__footer__text" style={{ marginBottom: 16 }}>
              {`Kings Sprayers has been building sprayers for more than 30 years.`}
            </p>
            <p className="kos__footer__text">
              {`Serving the Lawn & Landscape, Pest Control, Agricultural, Golf & Recreation, and Horticultural industries, Kings Sprayers offers high quality and reliable sprayers for all your spraying needs.`}
            </p>
          </div>
          <div className="column">
            <h3 className="kos__footer__title">{'Products & Resources'}</h3>
            <ul className="kos__menu">
              <ListItem label="3 Point Hitch Sprayers" to="/" />
              <ListItem label="Skid Sprayers" to="/about" />
              <ListItem label="2 Wheel Sprayers" to="/products" />
              <ListItem label="4 Wheel Sprayers" to="/about" />
              <ListItem label="Spot Sprayers" to="/about" />
              <ListItem label="Part & Accesories" to="/about" />
              <ListItem label="Product Manuals" to="/about" />
            </ul>
          </div>
          <div className="column">
            <h3 className="kos__footer__title">{'Customer Service'}</h3>
            <ul className="kos__menu">
              <ListItem label="Contact us" to="/about" />
              <ListItem label="FAQ's" to="/about" />
            </ul>
          </div>
          <div className="column">
            <h3 className="kos__footer__title">
              {'Connect with King Sprayers'}
            </h3>
            <p
              className="kos__footer__text"
              style={{ marginBottom: 16 }}
            >{`Stay in touch with King Sprayers by following us on social media!`}</p>
            <div className="kos__logos">
              <a title="facebook" href="https://facebook.com">
                <FacebookIcon />
              </a>
              <a title="twitter" href="https://twitter.com">
                <TwitterIcon />
              </a>
              <a title="vimeo" href="https://youtube.com">
                <YouTubeIcon />
              </a>
            </div>
            <hr className="kos__footer__hr" />
            <p className="kos__footer__text" style={{ marginBottom: 16 }}>
              {'7800 N. Orange Blossom Trail, Orlando, FL 32810'}
            </p>
            <p className="kos__footer__text" style={{ marginBottom: 16 }}>
              {'Phone: (800) 228-0905 | Fax: (407) 886-1616'}
            </p>
            <p className="kos__footer__text">
              {'Email: info@kingssprayers.com'}
            </p>
          </div>
        </div>
        <div className="kos__copyright">
          <span className="kos__footer__text">
            {'Copyright 2020 - Kings Sprayers®  |  All Rights Reserved'}
          </span>
          <img src="/img/logo-B&W@2x.png" className="kos__footer__img" alt="bottom-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
