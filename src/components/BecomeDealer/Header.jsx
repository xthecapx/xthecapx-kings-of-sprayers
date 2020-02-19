import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const Header = props => {
  return (
    <Grid
      container
      className="jumbotron"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12}>
        <EmailIcon />
        <h1>CONTACT US</h1>
        <p>{`Thank you for your interest in contacting Kings Sprayers. 
Whether you have a technical question, need product information or want to find out about dealership 
opportunities, we are happy to assist you.`}</p>
      </Grid>
    </Grid>
  );
};

export default Header;
