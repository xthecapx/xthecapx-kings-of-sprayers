import React from 'react';
import Img from 'gatsby-image'

export const Jumbotron = props => {
  const {
    image1
  } = props;
  const { alt = '', image } = image1
  const imageStyle = { borderRadius: '5px' }

  return (
    <div className="jumbotron">
      <div>
        <div>4 WHEELS</div>
        <div>Sprayers</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          purus morbi quam sit curabitur tellus habitant a ipsum. Ullamcorper et
          porttitor nisl lectus amet turpis euismod.
        </div>
        <button>View All Sprayers</button>
      </div>
      <div>
        {image1 && <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />}
      </div>
    </div>
  );
};
