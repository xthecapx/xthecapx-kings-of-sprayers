import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';
import { OurStory } from '../components/About/OurStory';
import { OurDealers } from '../components/About/OurDealers';
import { OurValues } from '../components/About/OurValues';

export const AboutPageTemplate = ({ story, values, dealers }) => {
  return (
    <Fragment>
      <OurStory story={story} />
      <OurValues values={values} />
      <OurDealers dealers={dealers} />
    </Fragment>
  );
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      background="bg-about-us"
      Header={() => {
        return (
          <div className="container">
            <h2 className="kos__header__title">{'30 YEARS'}</h2>
            <p className="kos__header__content">{`building high quality
commercial sprayers`}</p>
          </div>
        );
      }}
    >
      <AboutPageTemplate {...frontmatter} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        story {
          subtitle
          title
          body
        }
        values {
          subtitle
          title
          quality {
            title
            description
          }
          dependability {
            title
            description
          }
          service {
            title
            description
          }
        }
        dealers {
          subtitle
          title
          images {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
