import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ChatRounded from "@material-ui/icons/ChatRounded";
import CodeRounded from "@material-ui/icons/CodeRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import DeveloperModeRoundedIcon from "@material-ui/icons/DeveloperModeRounded";
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);


export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgCardTop);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>ABOUT US</h2>
          <br />
          <h5 className={classes.description}>
            ArciTECH Community is an initiative from School of Engineering, Sister Nivedita  University, with the vision of creating an environment
            where people enthusiastic about learning and developing, come together to share their knowledge and build astounding projects.
            Our goal is to come up with solutions for real life problems and grow the concept of peer-to-peer learning in the society.
            <br />
            <br />
            We believe in collaboration and growing together. Here, in ArciTECH, we conduct hands-on sessions on thriving technology,
            live seminars with Industry experts, competitions and various fun and team activities, thus promoting professional growth,
            development qualities and nature of collaborative learning.
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Build Connections"
              description="Meet passionates interested 
              in learning and developing. All are welcome, 
              including those with non-technical
              backgrounds and different majors."
              icon={GroupRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Learn & Grow"
              description="Learn about a wide range of technologies 
              through hands-on workshops, in-person training, 
              project building activities and expert sessions"
              icon={DeveloperModeRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Skill Enhancement"
              description="Enhance your skills by participating 
              in competitions and interesting activities plus get proper guidance from experienced members and leads"
              icon={CodeRounded}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Expert Sessions & Blogs"
              description="Get to learn and gain experience from industry experts
              and acquire awareness of modern technologies from blogs and daily articles. "
              icon={ChatRounded}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Develop & Inspire"
              description="
              Build engrossing solutions for real-life problems and inspire others by sharing experience 
              with knowledge for overall growth of entire community"
              icon={WorkRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Forums"
              description="
              Join telegram and discord groups for group discussions and fun activities. 
              Get daily updates about community, events, and articles as well. "
              icon={ForumRoundedIcon}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <div>
        <GridContainer direction="column" alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>UPCOMING EVENTS</h2>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={require("assets/img/event1.jpg")}
              alt="..."
              className={imageClasses}
              // width="700px"
              // height="400px"
              width="100%"
              height="auto"
            />
          </GridItem>
        </GridContainer>
        <GridContainer direction="column" alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card plain>
              <h3 className={classes.cardTitle}>
                <b>Signing Into Development World</b>
                <br />
              </h3>
              <CardBody>
                <p className={classes.description}>
                  In this modern world of development and technology, the art of starting
                  development and the way of continuously doing it is something very challenging.
                  Hence we come up with this One Day International Webinar where the experts will not only share their
                  experience and knowledge about the development world but will also give hands-on
                  training on some open resources for development.
                </p>
                <br />
                <Button color="custom" href="/SigningIntoDevelopmentWorld"> Learn More</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <br />
      <GridContainer direction="column"
        alignItems="center">
        <GridItem xs={12} sm={12} md={8}>
          <img
            src={require("assets/img/extra.png")}
            alt="..."
            className={imageClasses}
            width="50%"
            height="auto"
          />
          <h2 className={classes.title}>School Of Engineering <br />Sister Nivedita University</h2>
          <img src={require("assets/img/soe2.png")} className={imageClasses} width="200" height="200" />
          <h5 className={classes.description}>
            School of Engineering, Sister Nivedita University was established in 2018 with the vision of educating students with practical exposure leading to a career
            in research and development. Here the students are trained with modern facilities in order to meet the top industrial standards.
            School of Engineering has set sublime standards in addressing the technical and managerial resource shortage in the new era of dynamic globalisation.
            Since its inception, it has surpassed innumerable benchmarks of achievements and accreditations.
          </h5>
          <br />
          <Button
            color="custom"
            href="https://snuniv.ac.in/master/page/school-of-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
              </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
