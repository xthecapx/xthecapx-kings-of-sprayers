import React from "react";
import PropTypes from "prop-types";
import dealer1 from "../../img/about-page/dealer1.svg";
import dealer2 from "../../img/about-page/dealer2.svg";
import dealer3 from "../../img/about-page/dealer3.svg";

export const OurDealers = props => {
  const dealers = props.dealers;

  return (
    <div className="dealers-container is-flex-col-centered">

      <div>
        <p className="dealers-subtitle">{dealers.subtitle}</p>
        <p className="dealers-title">{dealers.title}</p>
      </div>

      {/* Nested divs solely for centering */}
      <div className="columns dealer-logos">
        <div className="column is-4">
          <div className="is-flex-col-centered">
            <img src={dealer1} alt="dealer logo one" />
          </div>
        </div>
        <div className="column is-4">
          <div className="is-flex-col-centered">
            <img src={dealer2} alt="dealer logo two" />
          </div>
        </div>
        <div className="column is-4">
          <div className="is-flex-col-centered">
            <img src={dealer3} alt="dealer logo three" />
          </div>
        </div>
      </div>

    </div>
  );
};

OurDealers.propTypes = {};
