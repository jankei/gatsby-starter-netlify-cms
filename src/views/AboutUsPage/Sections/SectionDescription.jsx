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
          <h5 className={classes.description}>
            את המועדון (הבוקס, כמו שאנו קוראים לו) הקמנו ב- 2012 והוא אחד
            ממועדוני הקרוספיט הרשמיים והוותיקים בארץ. התחלנו במועדון קטן של 45
            מ"ר ועם כמה מתאמנים שהתחברו לשיגעון שלנו. היום אנחנו מנהלים מועדון
            של כמעט 350 מ"ר עם מגוון מתאמנים בכל הגילאים והעיסוקים.   המועדון
            הינו מועדון קרוספיט רשמי והוא משויך לקהילת הקרוספיט העולמית המונה
            מעל ל- 10,000 מועדונים. תוכנית האימונים שלנו נבנית במחשבה רבה
            ומותאמת לאיגוד הקרוספיט העולמי וכמו כן, מותאמת ברמתה לשאר מועדוני
            הקרוספיט הנחשבים בעולם.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(SectionDescription);
