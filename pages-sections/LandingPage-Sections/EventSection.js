import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EventRoundedIcon from "@material-ui/icons/EventRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/eventStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgCardTop);
  return (
    <div className={classes.section}>
      {/* <h2 className={classes.title}>Exciting Events Coming Soon !!!</h2> */}
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <img
                  src={require("assets/img/event1.jpg")}
                  alt="..."
                  width="300px"
                  height="auto"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Signing Into Development World
              </h4>
              <CardBody>
                <p className={classes.description}>
                  In this modern world of development and technology, the art of starting
                  development and the way of continuously doing it is something very challenging.
                  Hence we come up with this One Day International Webinar where the experts will not only share their
                  experience and knowledge about the development world but will also give hands-on
                  training on some open resources for development.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button color="success" disabled startIcon={<EventRoundedIcon />}>
                  <span className={classes.date}>05-06-2021</span>
                </Button>
                <Button color="custom" href="/SigningIntoDevelopmentWorld"> All Details </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    // </div >
  );
}
// https://docs.google.com/forms/d/e/1FAIpQLScwNUiMx8g11CsJzsdWaEo06fY2ECIgDglxmkpSdhm8dCiPRw/viewform?usp=sf_link