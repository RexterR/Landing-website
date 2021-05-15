import React from "react";
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
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import PillSection from "pages-sections/Components-Sections/NavPillFront.js";

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
        brand="ArciTECH"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      ></Header>
      <Parallax filter responsive image={require("assets/img/profile-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>A Place To Create & Learn, Along With Having Fun</h1>
              <h4>
                A community for learners to learn and developers to develop.
              </h4>
              <br />
              <Button
                color="custom"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9W2B4-S2Stv62l5zgWTemwXpLyKC91jtOsLZZTglbEmonkg/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <PillSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
