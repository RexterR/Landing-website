import React from "react";
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

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>ABOUT US</h2>
          <h5 className={classes.description}>
            ArciTECH community is an initiative with the vision of creating a freindly enviroment
            where one will develop his/her own skills as well as guide others to develop theirs.
            Our goal is to develop solutions for real life problems spread the thinking of peer-to-peer learning.
            <br />
            <br />
              This community is open for all those who are interested in learning, developing and
              sharing knowledge. Here, in ArciTECH, we conduct workshops, seminars and other fun
              activities, thus making learning more easy and developing more fun.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Connect"
              description="Meet enthusiasts interested 
              in learning, developing and various modern technologies.
              All are welcome, including those with non-technical
              backgrounds and different majors."
              icon={GroupRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Learn"
              description="Learn about a wide range of technologies 
              through hands-on workshops, in-person training 
              and project building activities."
              icon={DeveloperModeRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Code"
              description="Get hands-on experience and guidance from 
              the community members and leads."
              icon={CodeRounded}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Talks"
              description="
              Get updated with latest development world,
              news and announcement"
              icon={ChatRounded}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Grow"
              description="Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back to your community by helping others learn as well."
              icon={WorkRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Forum"
              description="All are invited to join communities and mailing lists designed to help program members share learnings and best practices."
              icon={ForumRoundedIcon}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
