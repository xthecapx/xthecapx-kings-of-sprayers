import React from 'react';
import Grid from '@material-ui/core/Grid';

const Service = ({ title, description, button, icon }) => {
  return (
    <div className="kos__card column">
      <Grid container>
        <Grid item>{icon}</Grid>
        <Grid item xs={11}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button>{button}</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
