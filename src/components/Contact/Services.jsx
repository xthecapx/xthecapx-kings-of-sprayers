import React from 'react';
import Grid from '@material-ui/core/Grid';

import Service from './Service';

import { TYPES } from './Service';

const Services = ({ services }) => {
  return (
    <Grid container>
      <Service
        title={services[0].title}
        content={services[0].content}
        icon={TYPES.time}
      />
      <Service
        title={services[1].title}
        content={services[1].content}
        icon={TYPES.phone}
      />
      <Service
        title={services[2].title}
        content={services[2].content}
        icon={TYPES.fax}
      />
      <Service
        title={services[3].title}
        content={services[3].content}
        icon={TYPES.email}
      />
    </Grid>
  );
};

export default Services;
