/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>ArciTech</ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://docs.google.com/document/d/1YVGrwAhnVld6F8ofTVd3XEtKx8o2huy7FHSEmOS-fyg/edit?usp=sharing"
                className={classes.block}
                target="_blank"
              >
                Code of Coduct
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://docs.google.com/document/d/1zZ1vzZu8RkCRrnW7SnwgHEMUjTxPl-NDz1qrY7BkCt4/edit?usp=sharing"
                className={classes.block}
                target="_blank"
              >
                Guidelines
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on twitter"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://twitter.com/ArciTECH_SNU"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-twitter"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/ArciTECH-108818261348375"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-facebook"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="linked-in-tooltip"
                title="Follow us on linked-in"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.linkedin.com/company/arcitech-snu/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-linkedin-in"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="youtube-in-tooltip"
                title="Follow us on youtube"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.youtube.com/channel/UCY12Vjp4QuhScrM_BmbdRJQ"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-youtube"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="github-in-tooltip"
                title="Follow us on github"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://github.com/ArciTECH-SNU"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-github"} />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="blog-in-tooltip"
                title="Follow us on blog"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://medium.com/@arcitech.snu"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-blogger"} />
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
          {/* with{" "} */}
          {/* <Favorite className={classes.icon} />  */}
          , made by Team ArciTECH
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
