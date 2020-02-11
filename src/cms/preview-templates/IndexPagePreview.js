import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  console.log(data)
  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        main={{
          heading: entry.getIn(['data', 'main', 'heading']),
          subheading: entry.getIn(['data', 'main', 'subheading']),
          description: entry.getIn(['data', 'main', 'description']),
          button: entry.getIn(['data', 'main', 'button']),
          image1: {
            image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
            alt: entry.getIn(['data', 'main', 'image1', 'alt'])
          }
        }}
        cards={{
          quality: {
            title: entry.getIn(['data', 'cards', 'quality', 'title']),
            description: entry.getIn([
              'data',
              'cards',
              'quality',
              'description'
            ])
          },
          dependability: {
            title: entry.getIn(['data', 'cards', 'dependability', 'title']),
            description: entry.getIn([
              'data',
              'cards',
              'dependability',
              'description'
            ])
          },
          service: {
            title: entry.getIn(['data', 'cards', 'service', 'title']),
            description: entry.getIn([
              'data',
              'cards',
              'service',
              'description'
            ])
          }
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
