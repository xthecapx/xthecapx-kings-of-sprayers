import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const Header = props => {
  const { title, description } = props;

  return (
    <Grid
      container
      className="jumbotron"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12}>
        <EmailIcon />
        <h1>{title}</h1>
        <p>{description}</p>
      </Grid>
    </Grid>
  );
};

export default Header;
