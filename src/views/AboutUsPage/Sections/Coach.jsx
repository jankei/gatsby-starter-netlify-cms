import React from "react";
import classNames from "classnames";

import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardAvatar from "../../../components/Card/CardAvatar.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

function Coach(props) {
  const { classes, image, facebook, instagram, title } = props;
  return (
    <GridItem xs={12} sm={4} md={4}>
      <Card plain profile>
        <CardHeader image plain>
          <CardAvatar profile plain>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image} alt="..." />
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${image})`,
                opacity: "1"
              }}
            />
          </CardAvatar>
        </CardHeader>
        <CardBody plain>
          <h4 className={classes.cardTitle}>{title}</h4>
        </CardBody>
        <CardFooter profile plain className={classes.justifyContent}>
          <Button href={facebook} justIcon round color="facebook">
            <i className="fab fa-facebook-square" />
          </Button>
          <Button href={instagram} justIcon round color="dribbble">
            <i className="fab fa-instagram" />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default withStyles(teamStyle)(Coach);
