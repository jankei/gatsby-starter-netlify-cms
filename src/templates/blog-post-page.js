import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import BlogPostView from "../views/BlogPostPage/BlogPostPage";

const BlogPostPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostView
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

BlogPostPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPostPage;

export const blogPostPageQuery = graphql`
  query blogPostPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
