/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
          {/* with{" "} */}
          {/* <Favorite className={classes.icon} />  */}
          , made by Team ArciTech to Build a better
          community
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
