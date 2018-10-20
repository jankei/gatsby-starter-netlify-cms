import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import LandingPageView from "../views/LandingPage/LandingPage";

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout classPrefix="lp">
      <LandingPageView
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
