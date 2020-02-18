import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layouts/Main';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <Fragment>
      <div>{title}</div>
    </Fragment>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
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
        title
      }
    }
  }
`;
