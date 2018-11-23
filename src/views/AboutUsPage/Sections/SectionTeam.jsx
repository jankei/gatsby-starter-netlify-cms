import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardAvatar from "../../../components/Card/CardAvatar.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

import FaceMarc from "../../../assets/img/faces/marc.jpg";
import FaceChristian from "../../../assets/img/faces/christian.jpg";
import FaceKendall from "../../../assets/img/faces/kendall.jpg";
import FaceAvatar from "../../../assets/img/faces/avatar.jpg";

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
        {props.coach1 && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach1}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach2 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach2}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach3 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach3}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach4 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach4}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach5 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach5}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach6 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach6}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach7 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach7}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach8 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach8}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
        {props.coach9 !== "none" && (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={FaceChristian} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${FaceChristian})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.coach9}</h4>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        )}
      </GridContainer>
    </div>
  );
}

export default withStyles(teamStyle)(SectionTeam);
