import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../../components/Header/Header.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import Footer from "../../components/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";

import SectionDescription from "./Sections/SectionDescription.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionOffice from "./Sections/SectionOffice.jsx";
import SectionContact from "./Sections/SectionContact";

import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
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
            <SectionDescription content={this.props.description} />
            <SectionTeam
              title={this.props.teamTitle}
              description={this.props.teamDescription}
              coach1={this.props.coach1}
              coach2={this.props.coach2}
              coach3={this.props.coach3}
              coach4={this.props.coach4}
              coach5={this.props.coach5}
              coach6={this.props.coach6}
              coach7={this.props.coach7}
              coach8={this.props.coach8}
              coach9={this.props.coach9}
            />
            <SectionOffice
              title={this.props.equipmentTitle}
              description={this.props.equipmentDescription}
            />
            <SectionContact
              title={this.props.contactTitle}
              description={this.props.contactDescription}
              button={this.props.contactButton}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
