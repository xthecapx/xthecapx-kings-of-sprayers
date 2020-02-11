import React from "react";
import PropTypes from "prop-types";
import Shield from "@material-ui/icons/VerifiedUser";
import People from "@material-ui/icons/People";
import ThumbUp from "@material-ui/icons/ThumbUp";

export const Divider = props => {
  const { cards } = props;

  return (
    <div className="container jumbotron-divider">
      <div className="columns is-vcentered box is-rounded">
        <div className="column">
          <Shield className="image" style={{ fontSize: 50 }} />
          <div className="divider-textbox">
            <p className="title is-4">{cards.quality.title}</p>
            <p className="subtitle is-6">{cards.quality.description}</p>
          </div>
        </div>

        <div className=" column is-0 divider-vertical-bar"></div>

        <div className="column">
          <People className="image" style={{ fontSize: 50 }} />
          <div className="divider-textbox">
            <p className="title is-4">{cards.dependability.title}</p>
            <p className="subtitle is-6">{cards.dependability.description}</p>
          </div>
        </div>

        <div className="column is-0 divider-vertical-bar"></div>

        <div className="column">
          <ThumbUp className="image" style={{ fontSize: 50 }} />
          <div className="divider-textbox">
            <p className="title is-4">{cards.service.title}</p>
            <p className="subtitle is-6">{cards.service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Divider.propTypes = {};
