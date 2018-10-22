import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "gatsby";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";

import Footer from "./Footer.jsx";
import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

function Footered(props) {
  const { classes } = props;
  return (
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
  );
}

Footered.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingPageStyle)(Footered);
