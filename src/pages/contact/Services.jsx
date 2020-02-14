import React from 'react';
import Grid from '@material-ui/core/Grid';

import Service from './Service';

import { TYPES } from './Service';

const Services = () => {
  return (
    <Grid container>
      <Service
        title="Bussiness hours"
        content={`Monday - Friday: 
8:00am - 5:00pm`}
        icon={TYPES.time}
      />
      <Service
        title="Phone number"
        content={`(800) 228-0905`}
        icon={TYPES.phone}
      />
      <Service title="Fax" content={`(407) 886-1616`} icon={TYPES.fax} />
      <Service
        title="Email"
        content={`info@kingssprayers.com`}
        icon={TYPES.email}
      />
    </Grid>
  );
};

export default Services;
