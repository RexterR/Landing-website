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
import Event1 from "pages-sections/LandingPage-Sections/Event1.js";

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
                                Signing Into Development World
                             </h1>
                            <br />
                            <h4 classname={classes.subtitle}>
                                The event is open for all. Join the event and get experience from leading Industry Professionals.
                                Last but not the least, enjoy the live Hands-on session from our Developer Lead.
                                </h4>
                            <br />
                            <br />
                            <GridContainer>
                                <GridItem xs={6} sm={6} md={6}>
                                    <Button
                                        color="custom" rounded
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScwNUiMx8g11CsJzsdWaEo06fY2ECIgDglxmkpSdhm8dCiPRw/viewform?usp=sf_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Register Now !!!
                                    </Button>
                                </GridItem>
                            </GridContainer>

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Event1 />
                </div>
            </div>
            <Footer />
        </div>
    );
}