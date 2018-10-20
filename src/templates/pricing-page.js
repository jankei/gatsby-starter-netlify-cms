import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PricingPage from "../views/PricingPage/PricingPage";

const PricingPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout classPrefix="pp">
      <PricingPage
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PricingPageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PricingPageTemplate;

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
