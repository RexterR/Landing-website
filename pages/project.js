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
import ProjectSection from "pages-sections/LandingPage-Sections/ProjectSection.js";

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
      <Parallax filter responsive image={require("assets/img/team_work.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Projects
              </h1>
              <h3 classname={classes.subtitle}>
                Alongwith learning, hands on is quite important. If you have developed something interesting and want your project to be featured here then
                Click the below button.
                <br />
                <br />
              </h3>
              <div>
                <Button
                  color="custom" rounded
                  href="https://docs.google.com/forms/d/e/1FAIpQLSff47ZF6wc_Cb89vwb3U4Cq4rq4TBOb_b5_jOWrg5OKirEeXw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Project
                    </Button>
              </div>
              <br />
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProjectSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
