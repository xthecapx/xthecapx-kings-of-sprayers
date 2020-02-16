import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layouts/Main';

const Sprayers = () => {
  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}>
            filters
          </Grid>
          <Grid item xs={9}>
            Sprayers
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Sprayers;
