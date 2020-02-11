import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';

export const Jumbotron = props => {
  const { image1 = {}, heading, subheading, description, button } = props;
  const { alt = '', image } = image1;
  const imageStyle = { borderRadius: '5px' };

  console.log(image1)
  return (
    <Grid container className="jumbotron" justify='space-between' alignItems='center'>
      <Grid item xs={5}>
        <Grid container alignItems="flex-end" direction="column" spacing={1}>
          <Grid item className="jumbotron-title">
            {heading}
          </Grid>
          <Grid item className="jumbotron-subtitle">
            {subheading}
          </Grid>
          <Grid item className="jumbotron-description">
            {description}
          </Grid>
          <Grid item>
            <button className="jumbotron-button button is-rounded">
              {button}
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        {image && image.childImageSharp && (
          <Img
            style={imageStyle}
            fluid={image.childImageSharp.fluid}
            alt={alt}
          />
        )}
      </Grid>
    </Grid>
  );
};
