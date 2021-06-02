import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
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
            <h1 className={classes.title}>Signing into Development World</h1>
            <br />

            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        color="custom"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScwNUiMx8g11CsJzsdWaEo06fY2ECIgDglxmkpSdhm8dCiPRw/viewform?usp=sf_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Register Now !!!
                </Button>
                    <h2 className={classes.title}>About Event</h2>
                    <div>
                        <h4 className={classes.description}>
                            In this modern world of development and technology, the art of starting development and the way of continuously doing it is something
                            very challenging. There are various obstacles that one needs to face and therefore perfect planning and proper guidance can
                            lead to better understanding and help in reaching greater heights.<br /><br />

                            This challenge motivated us to come up with this <b>One Day International Webinar</b> where the Industry Experts will share their knowledge and experience
                            on how to become a successful developer and what can be the various paths or roadmaps that one can follow.
                            Along with the intense talk from experts we will also have an amazing Hand-on session on "How to Deploy your Project", which will be
                            delivered by our Developer Lead.
                        </h4>
                    </div>
                </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Who can join this event?</h2>
                    <h4 className={classes.description}>
                        This webinar is open for all those enthusiastic people who wants to become a successful developer and
                        requires guidance on how to begin or boost your preparation for reaching the ultimate heights.
                    </h4>
                </GridItem>
            </GridContainer>

            {/* <h2 className={classes.title} span class="left">FAQ</h2> */}
            <br />
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Event Timing & Platform</h2>
                    <h4 className={classes.description}>
                        The event is going to be held on <b>5th June 2021</b> and will start sharp from <b>3 pm onwards</b>.
                        It will be an online webinar and one can register and join the event on <b>Google Meet</b> or can even join the live
                        streaming of this event on our Facebook Page and Youtube Channel.
                </h4>
                </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>About Speakers</h2>
                </GridItem>
            </GridContainer>

            <GridContainer direction="row" alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <img
                                src={require("assets/img/MadhurimaRay.jpg")}
                                alt="..."
                                className={imageClasses}
                            />
                        </GridItem>
                        <h4 className={classes.cardTitle}>
                            Dr. Madhurima Ray, PhD
                            </h4>
                        <CardBody>
                            <p className={classes.description}>
                                Dr. Ray is the Senior Software Engineer at Intel Corporation, USA. She has completed her PhD from the Temple University, USA.
                                She was also an intern at HP and has worked with TCS as well. She has completed her Bachelors' and Masters' from Calcutta University, India.
                                She was one of the finest student of her time and a Gold medalist in her university.
                                </p>
                            <Button
                                href="https://www.linkedin.com/in/madhurima-ray/"
                                justIcon
                                color="transparent"
                                // className={classes.margin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={classes.socials + " fab fa-linkedin-in"} />
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <img
                                src={require("assets/img/Arijit.jpg")}
                                alt="..."
                                className={imageClasses}
                            />
                        </GridItem>
                        <h4 className={classes.cardTitle}>
                            Arijit Sanyal
                            </h4>
                        <CardBody>
                            <p className={classes.description}>
                                Mr. Sanyal has worked in TCS for 6.5 years, out of which he has worked in an onsite (Belgium) role for more than three years.
                                Starting as a trainee in TCS, he recently left as a team lead which then was comprising of approximately
                                20 associates. He is currently working as a SAP ISU techno functional consultant in a
                                Belgium based company.
                                </p>
                            <Button
                                href="https://www.linkedin.com/in/arijit-sanyal"
                                justIcon
                                color="transparent"
                                // className={classes.margin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={classes.socials + " fab fa-linkedin-in"} />
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <img
                                src={require("assets/img/Abhinav.jpg")}
                                alt="..."
                                className={imageClasses}
                            />
                        </GridItem>
                        <h4 className={classes.cardTitle}>
                            Abhinav Jain
                            </h4>
                        <CardBody>
                            <p className={classes.description}>
                                Mr Jain is the Co-Founder of Frazor Enterprise, a Fintech Startup, recognized by the Government of India.
                                His startup was awarded as the Most Innovative startup in the fintech domain by the National Payment Corporation of India (NPCI).
                                Frazor is currently working with NPCI to develop an exceptional Bill payment and information exchange solution for India.
                            </p>
                            <Button
                                href="https://www.linkedin.com/in/abhinav-jain/"
                                justIcon
                                color="transparent"
                                // className={classes.margin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={classes.socials + " fab fa-linkedin-in"} />
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                            <img
                                src={require("assets/img/Suman.jpg")}
                                alt="..."
                                className={imageClasses}
                            />
                        </GridItem>
                        <h4 className={classes.cardTitle}>
                            Suman Das
                            </h4>
                        <CardBody>
                            <p className={classes.description}>
                                Mr. Das is the Developer Lead at ArciTECH Community. He is currently working as an intern in Cosgrid Networks Pvt Ltd, Chennai.
                                He has done many amazing projects and has good knowledge of technologies like MongoDB, Cloud Computing,
                                Kubernetes, ReactJS, TypeScript and Python. He is also a 3rd Year BTech student in Sister Nivedita University.
                                </p>
                            <Button
                                href="https://www.linkedin.com/in/rexterrs/"
                                justIcon
                                color="transparent"
                                // className={classes.margin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={classes.socials + " fab fa-linkedin-in"} />
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}> Merits of Joining </h2>
                    <h4 className={classes.description}>
                        i)   Discussion on the World of Development<br />
                        ii)  Paths towards becoming a successful developer<br />
                        iii) Knowledge on Career Paths from Industry Professionals<br />
                        iv) Hands-on Session: Deployment of a Sample Project<br />
                        v) All the attendees will get <b>Certificate of Participation</b>
                    </h4>
                </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}> Event Coordinators </h2>
                    <h4 className={classes.description}>
                        <b>Team ArciTECH</b> <br />
                        & <br />
                        <b>Prof. Joy Dutta</b>, <br />Department of Computer Science and Engineering, <br />Sister Nivedita University<br />
                    </h4>
                </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer direction="column"
                alignItems="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}> For More Details or Any Query </h2>
                    <h4 className={classes.description}>
                        Mail us at <b>admin@arcitech.tech</b>
                        <br />
                        Or,
                        <br />
                        Contact our Event Managers:<br />
                        i)  <b>Anand Kumar: 8100699918</b><br />
                        ii) <b>Abhinaba Roy Chowdhury: 7003168779</b><br />
                    </h4>
                </GridItem>
            </GridContainer>
        </div >
    );
}
// https://docs.google.com/forms/d/e/1FAIpQLScwNUiMx8g11CsJzsdWaEo06fY2ECIgDglxmkpSdhm8dCiPRw/viewform?usp=sf_link