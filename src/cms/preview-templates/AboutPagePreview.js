import React from "react";
import PropTypes from "prop-types";
import AboutUsPage from "../../views/AboutUsPage/AboutUsPage";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutUsPage
    title={entry.getIn(["data", "title"])}
    heading={entry.getIn(["data", "heading"])}
    description={entry.getIn(["data", "description"])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
