import React from "react";
import PropTypes from "prop-types";

export const OurStory = props => {
  const story = props.story;

  return (
    <div className="is-hcentered is-flex-col-centered story-container">
      <p className="has-text-centered story-subtitle">{story.subtitle}</p>
      <p className="has-text-centered story-title">{story.title}</p>
      <p className="has-text-centered story-body">{story.body}</p>
    </div>
  );
};

OurStory.propTypes = {
  story: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
  })
};
