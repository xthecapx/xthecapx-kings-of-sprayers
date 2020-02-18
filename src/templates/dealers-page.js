import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';
import BecomeDealer from '../components/BecomeDealer';

export const DealersPageTemplate = props => (
  <Fragment>
    <BecomeDealer {...props} />
  </Fragment>
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
    <Layout background="bg-dealers">
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
        description
        disclaimer
        form {
          company
          email
          name
          number
          reason
          submit
        }
      }
    }
  }
`;
