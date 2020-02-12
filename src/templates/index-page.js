import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';
import OurDealers from '../components/Dealers/OurDealers';
import Services from '../components/Services/Services';
import { Jumbotron } from '../components/Home';
import { Divider } from '../components/Home/Divider';

export const IndexPageTemplate = props => {
  const { dealers, services } = props;

  return (
    <Fragment>
      <OurDealers dealers={dealers} />
      <Services services={services} />
    </Fragment>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { main, cards } = frontmatter;

  return (
    <Layout
      Header={() => {
        return (
          <div className="container">
            <Jumbotron {...main} />
            <Divider cards={cards} />
          </div>
        );
      }}
    >
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        main {
          heading
          subheading
          description
          button
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        cards {
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
        services {
          title
          description
          button
        }
      }
    }
  }
`;
