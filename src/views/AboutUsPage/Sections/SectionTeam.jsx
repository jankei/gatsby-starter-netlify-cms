import React from "react";
import classNames from "classnames";

import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

import FaceMarc from "../../../assets/img/faces/marc.jpg";
import FaceChristian from "../../../assets/img/faces/christian.jpg";
import FaceKendall from "../../../assets/img/faces/kendall.jpg";
import FaceAvatar from "../../../assets/img/faces/avatar.jpg";
import Coach from "./Coach";

function SectionTeam(props) {
  const { classes } = props;
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>{props.title}</h2>
          <h5 className={classes.description}>{props.description}</h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {props.coaches.map(
          (c, i) =>
            c.title !== "none" && (
              <Coach
                title={c.title}
                key={i}
                facebook={c.facebook}
                instagram={c.instagram}
                classes={props.classes}
                image={FaceChristian}
              />
            )
        )}
      </GridContainer>
    </div>
  );
}

export default withStyles(teamStyle)(SectionTeam);
