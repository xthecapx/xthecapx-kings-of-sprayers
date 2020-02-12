import React from 'react';
import Grid from '@material-ui/core/Grid';

const OurDealers = ({ dealers }) => {
  return (
    <div className="our-dealers-container">
      <div className="our-dealers container">
        <h2 className="our-dealers__Title">{dealers.title}</h2>
        <Grid
          container
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={3}>
            <div className="our-dealers__ImageWrapper">
              <img
                src={dealers ? dealers.images[0].image.childImageSharp.fluid.src : ''}
                className="our-dealers__logo our-dealers__logo--sm"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="our-dealers__ImageWrapper">
              <img
                src={dealers ? dealers.images[1].image.childImageSharp.fluid.src : ''}
                className="our-dealers__logo"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="our-dealers__ImageWrapper">
              <img
                src={dealers ? dealers.images[2].image.childImageSharp.fluid.src : ''}
                className="our-dealers__logo"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurDealers;
