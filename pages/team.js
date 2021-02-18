import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page

import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";


const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        id="header"
        color="transparent"
        routes={dashboardRoutes}
        brand="ArciTech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      ></Header>
      <Parallax filter responsive image={require("assets/img/team.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Team
              </h1>
              <h3 classname={classes.subtitle}>
                Teamwork is the ability to work together toward a common vision.
                <br />
                <br />
                At ArciTECH, we celebrate team work and encourage those individuals who put their hardwork for success of community.
              </h3>
              <br />
              <Button
                color="primary" rounded
                href="https://docs.google.com/forms/d/e/1FAIpQLSeZ6rsIGQ83m2Q-0ibdfYNobBv4mn1A6Iq1ZFfUx9W2ALIkNA/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Team
              </Button>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
