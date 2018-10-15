import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import Content, { HTMLContent } from "../../components/Content";
import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

/* import SectionProduct from "./Sections/SectionProduct.jsx";
 * import SectionTeam from "./Sections/SectionTeam.jsx";
 * import SectionWork from "./Sections/SectionWork.jsx";
 *  */
const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    /* window.scrollTo(0, 0); */
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
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                {/* <Button
                    color="danger"
                    size="lg"
                    href="https://www.youtube.com/watch?v=XfqY0BAaJ-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="fas fa-play" />
                    Watch video
                    </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/* <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
            <SectionProduct />
            <SectionTeam />
            <SectionWork />
            </div>
            </div> */}
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link to="/about" className={classes.block}>
                      About us
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link to="/licenses" className={classes.block}>
                      Licenses
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by Boxify
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
