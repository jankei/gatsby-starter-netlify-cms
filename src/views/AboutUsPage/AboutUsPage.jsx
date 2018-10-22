import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";

import Header from "../../components/Header/Header.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import Footer from "../../components/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";

import SectionDescription from "./Sections/SectionDescription.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionServices from "./Sections/SectionServices.jsx";
import SectionOffice from "./Sections/SectionOffice.jsx";
import SectionContact from "./Sections/SectionContact";

import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import Content, { HTMLContent } from "../../components/Content";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const PageContent = this.props.contentComponent || Content;
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
        <Parallax
          image={require("../../assets/img/aboutus.jpg")}
          filter="dark"
          small
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PageContent content={this.props.title} />
            <PageContent content={this.props.content} />
            <SectionDescription />
            <SectionTeam />
            <SectionOffice />
            <SectionContact />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
