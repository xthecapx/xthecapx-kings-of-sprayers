import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';

export const DealersPageTemplate = ({ title }) => (
  <div>
    <div className="full-width-image margin-top-0">{title}</div>
  </div>
);

DealersPageTemplate.propTypes = {
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

const DealersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DealersPageTemplate {...frontmatter} />
    </Layout>
  );
};

DealersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default DealersPage;

export const pageQuery = graphql`
  query DealersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "dealers-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
