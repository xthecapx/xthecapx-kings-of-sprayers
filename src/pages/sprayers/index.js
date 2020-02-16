import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layouts/Main';
import { useSprayers } from './useSprayers';

const Sprayers = () => {
  const {error, sprayers } = useSprayers()

  if (error) {
    return <div>failed to load</div>;
  }
  if (!sprayers) {
    return <div>loading...</div>;
  }

  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}>
            filters
          </Grid>
          <Grid item xs={9}>
            {sprayers.map(spray => <div>{spray.title}</div>)}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Sprayers;
