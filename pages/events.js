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
import EventSection from "pages-sections/LandingPage-Sections/EventSection.js";

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
      <Parallax filter responsive image={require("assets/img/event.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Events
              </h1>
              <h4 classname={classes.subtitle}>
                Join us in our events and gather knowledge with fun. Here in ArciTECH, we try and make our events more joyful and informative
                such that each and every person attending are benefitted from it.
                <br />
                <br />
                Interested in being Speaker or Sponsor ? Check out below options.
              </h4>
              <br />
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>

                  <Button
                    color="custom" rounded
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6cAaOdOZF2SRHAQNpYdmEInL8r2b40fmwmyzN9SpnG0osqg/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Proposal
              </Button>

                  <Button
                    color="custom" rounded
                    href="https://docs.google.com/forms/d/e/1FAIpQLScMYRr7a-FZptuZHgKqVioo1kO6lc5tJPmZtMS-RyIe0koomQ/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sponsor Event
                </Button>

                </GridItem>
              </GridContainer>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <EventSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
