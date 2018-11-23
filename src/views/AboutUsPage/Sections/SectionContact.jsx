import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";

import contactStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.jsx";

class SectionContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialitySelect: "1"
    };
  }
  handleSpeciality = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, title, description, button } = this.props;
    return (
      <div className={classes.aboutUs}>
        <GridContainer>
          <GridItem
            md={8}
            sm={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <h2 className={classNames(classes.title, classes.textCenter)}>
              {title}
            </h2>
            <h4 className={classNames(classes.description, classes.textCenter)}>
              {description}
            </h4>
            <form>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <CustomInput
                    labelText="אימייל"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <CustomInput
                    labelText="טלפון"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <CustomInput
                    labelText="שם"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem
                  md={4}
                  sm={4}
                  className={classNames(
                    classes.mrAuto,
                    classes.mlAuto,
                    classes.textCenter
                  )}
                >
                  <Button color="primary" round>
                    {button}
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(contactStyle)(SectionContact);
