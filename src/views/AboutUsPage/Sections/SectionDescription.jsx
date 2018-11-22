import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.jsx";

function SectionDescription(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>{props.content}</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(SectionDescription);
