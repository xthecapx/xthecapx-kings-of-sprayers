import React from 'react';
import Grid from '@material-ui/core/Grid';

import Service from './Service';

const Services = ({ services }) => {
  console.log(services);
  return (
    <div className="kos__services container">
      <div className="columns">
        {services.map(service => (
          <Service
            title={service.title}
            description={service.description}
            button={service.button}
            icon='icon'
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
