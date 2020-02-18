import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layouts/Main";
import { OurStory } from "../components/about/OurStory";
import { OurDealers } from "../components/about/OurDealers";
import { OurValues } from "../components/about/OurValues";

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
  const { story, values, dealers } = frontmatter;

  return (
    <Layout
      Header={() => {
        return <div className="container"></div>;
      }}
    >
      <AboutPageTemplate {...frontmatter} />
      <div className="container">
        <OurStory story={story} />
        <OurValues values={values} />
        <OurDealers dealers={dealers} />
      </div>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;
// query IndexPageTemplate {
//   markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
