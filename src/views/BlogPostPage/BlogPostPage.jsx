import React from "react";
import { Link } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import Footer from "../../components/Footer";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import SectionText from "./Sections/SectionText";
import SectionWork from "./Sections/SectionWork";
import SectionSimilarStories from "./Sections/SectionSimilarStories";

import blogPostPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";
import withRoot from "../../withRoot";
import Content, { HTMLContent } from "../../components/Content";

class BlogPostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Boxify"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
        />
        <Parallax image={require("../../assets/img/bg5.jpg")} filter="dark" />
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionText />
            <SectionWork />
          </div>
        </div>
        <SectionSimilarStories />
        <Footer />
      </div>
    );
  }
}

export default withRoot(withStyles(blogPostPageStyle)(BlogPostPage));
