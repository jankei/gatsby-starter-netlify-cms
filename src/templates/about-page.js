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
        coach1={post.frontmatter.coach1}
        coach2={post.frontmatter.coach2}
        coach3={post.frontmatter.coach3}
        coach4={post.frontmatter.coach4}
        coach5={post.frontmatter.coach5}
        coach6={post.frontmatter.coach6}
        coach7={post.frontmatter.coach7}
        coach8={post.frontmatter.coach8}
        coach9={post.frontmatter.coach9}
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
        coach1
        coach2
        coach3
        coach4
        coach5
        coach6
        coach7
        coach8
        coach9
        equipmentTitle
        equipmentDescription
        contactTitle
        contactDescription
        contactButton
      }
    }
  }
`;
