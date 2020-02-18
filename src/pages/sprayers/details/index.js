import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../../../components/Layouts/Main';
import { SprayersContext } from '../../../resources/Sprayers';

function paramsToObject(entries) {
  let result = {};
  for (let entry of entries) {
    // each 'entry' is a [key, value] tupple
    const [key, value] = entry;
    result[key] = value;
  }
  return result;
}

const Sprayers = ({ location }) => {
  const { sprayers } = useContext(SprayersContext);
  console.log(sprayers);
  console.log(location);

  const search = Object.fromEntries(
    new URLSearchParams(location.search.slice(1))
  );

  if (sprayers) {
    const sprayer = sprayers.find(sprayer => String(sprayer.id) === search.id);
    console.log(search);
    console.log(sprayer);
  }
  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}>
            filters
          </Grid>
          <Grid item xs={9}>
            Details
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Sprayers;
