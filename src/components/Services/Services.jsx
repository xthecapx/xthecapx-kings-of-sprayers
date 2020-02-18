import React from 'react';

import Service from './Service';

import { TYPES } from './Service';

const Services = ({ services }) => {
  console.log(services);
  return (
    <div className="kos__services container">
      <div className="columns">
        <Service
          title={services[0].title}
          description={services[0].description}
          button={services[0].button}
          icon={TYPES.help}
        />
        <Service
          title={services[1].title}
          description={services[1].description}
          button={services[1].button}
          icon={TYPES.waranty}
        />
        <Service
          title={services[2].title}
          description={services[2].description}
          button={services[2].button}
          icon={TYPES.dealer}
        />
      </div>
    </div>
  );
};

export default Services;
