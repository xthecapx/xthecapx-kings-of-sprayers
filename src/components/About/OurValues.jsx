import React from "react";
import PropTypes from "prop-types";
import Shield from "@material-ui/icons/VerifiedUser";
import People from "@material-ui/icons/People";
import ThumbUp from "@material-ui/icons/ThumbUp";
import background from "../../img/about-page/values-background.svg"

export const OurValues = props => {
  const values = props.values;

  return (

    <div style={{backgroundImage: `url(${background})`}}>
      <div className="container values-container is-flex-col-centered">      
        <div>
          <p className="has-text-centered values-subtitle">{values.subtitle}</p>
          <p className="has-text-centered values-title">{values.title}</p>
        </div>

        <ul className="columns">
          <li className="column is-hcentered">
            <Shield className="values-icon" style={{ fontSize: 50 }} />
            <p className="values-item-title">{values.quality.title}</p>
            <p className="values-item-description">{values.quality.description}</p>
          </li>
          <li className="column is-hcentered">
            <People className="values-icon" style={{ fontSize: 50 }} />
            <p className="values-item-title">{values.dependability.title}</p>
            <p className="values-item-description">{values.dependability.description}</p>
          </li>
          <li className="column is-hcentered">
            <ThumbUp className="values-icon" style={{ fontSize: 50 }} />
            <p className="values-item-title">{values.service.title}</p>
            <p className="values-item-description">{values.service.description}</p>
          </li>
        </ul>

      </div>
    </div>
  );
};

OurValues.propTypes = {
  values: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    quality: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }),
    dependability: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }),
    service: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
};
