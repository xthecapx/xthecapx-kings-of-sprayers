import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layouts/Main';

export default ({ data }) => {
  const { sprayers } = data;

  console.log(sprayers);
  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            {sprayers.title}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($handle: String!) {
    sprayers(handle: { eq: $handle }) {
      id
      title
      handle
      related {
        description
        featured_image
        handle
        id
        title
      }
      tags {
        Frame
        Pump_Type
        Tank_Size
      }
    }
  }
`;
