import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import withRoot from "../../withRoot";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionWork from "./Sections/SectionWork.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Boxify"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={require("../../assets/img/landingpage.jpg")}
          filter="dark"
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
            <SectionWork />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRoot(withStyles(landingPageStyle)(LandingPage));
