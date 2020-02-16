import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts/Main';
import Contact from '../components/Contact';
import Header from '../components/Contact/Header';
import Services from '../components/Contact/Services';

export const ContactPageTemplate = props => (
  <Fragment>
    <Contact {...props} />
  </Fragment>
);

ContactPageTemplate.propTypes = {
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

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { form, title, description, services } = frontmatter;

  return (
    <Layout
      Header={() => {
        return (
          <div className="container">
            <Header title={title} description={description} />
            <Services services={services} />
          </div>
        );
      }}
    >
      <ContactPageTemplate {...form} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        description
        services {
          title
          content
        }
        form {
          title
          disclaimer
          name
          email
          number
          subject
          message
          submit
        }
      }
    }
  }
`;
