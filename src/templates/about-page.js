import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AboutUsPage from "../views/AboutUsPage/AboutUsPage";

export const AboutPageTemplate = ({
  title,
  heading,
  description,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{heading}</p>
              <br />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout classPrefix="ap">
      <AboutUsPage
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        teamTitle={post.frontmatter.teamTitle}
        teamDescription={post.frontmatter.teamDescription}
        coaches={post.frontmatter.coaches}
        equipmentTitle={post.frontmatter.equipmentTitle}
        equipmentDescription={post.frontmatter.equipmentDescription}
        contactTitle={post.frontmatter.contactTitle}
        contactDescription={post.frontmatter.contactDescription}
        contactButton={post.frontmatter.contactButton}
      />
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
        description
        teamTitle
        teamDescription
        coaches {
          title
          facebook
          instagram
        }
        equipmentTitle
        equipmentDescription
        contactTitle
        contactDescription
        contactButton
      }
    }
  }
`;
