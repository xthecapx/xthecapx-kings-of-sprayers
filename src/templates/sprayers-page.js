import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';

export const SprayersPageTemplate = ({ title }) => (
  <div>
    <div className="full-width-image margin-top-0">{title}</div>
  </div>
);

SprayersPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const SprayersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SprayersPageTemplate {...frontmatter} />
    </Layout>
  );
};

SprayersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SprayersPage;

export const pageQuery = graphql`
  query SprayerPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sprayers-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
