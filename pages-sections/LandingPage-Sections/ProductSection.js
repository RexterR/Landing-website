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
import InfoArea from "components/InfoArea/InfoArea.js";
import SoeInfoArea from "components/InfoArea/soe-infoArea.js";
import Button from "components/CustomButtons/Button.js";
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
            ArciTECH Community is an initiative from  School of Engineering, Sister Nivedita  University, with the vision of creating an environment
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
      <GridContainer direction="column"
        alignItems="center">
        <GridItem xs={12} sm={12} md={8}>
          <img
            src={require("assets/img/extra.png")}
            alt="..."
            className={imageClasses}
            width="400px"
            height="300px"
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
