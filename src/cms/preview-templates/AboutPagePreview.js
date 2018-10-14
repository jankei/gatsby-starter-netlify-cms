import React from "react";
import PropTypes from "prop-types";
import AboutUsPage from "../../views/AboutUsPage/AboutUsPage";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutUsPage
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
