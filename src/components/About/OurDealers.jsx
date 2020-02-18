import React from "react";
import PropTypes from "prop-types";
import dealer1 from "../../img/about-page/dealer1.svg";
import dealer2 from "../../img/about-page/dealer2.svg";
import dealer3 from "../../img/about-page/dealer3.svg";

export const OurDealers = props => {
  const { dealers } = props;

  console.log(dealers.images);

  return (
    <div className="container">
      <div className="dealers-container is-flex-col-centered">
        <div>
          <p className="dealers-subtitle">{dealers.subtitle}</p>
          <p className="dealers-title">{dealers.title}</p>
        </div>

        {/* Nested divs solely for centering */}
        <div className="columns dealer-logos">
          <div className="column is-4">
            <div className="is-flex-col-centered">
              <img 
                src={dealer1} 
                alt={dealers ? dealers.images[0].alt : ""} 
              />
            </div>
          </div>
          <div className="column is-4">
            <div className="is-flex-col-centered">
              <img 
              src={dealer2} 
              alt={dealers ? dealers.images[1].alt : ''}
              />
            </div>
          </div>
          <div className="column is-4">
            <div className="is-flex-col-centered">
              <img 
                src={dealer3} 
                alt={dealers ? dealers.images[2].alt : ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
