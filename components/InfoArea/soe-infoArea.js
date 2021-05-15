import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/components/soe-infoStyle.js";

const useStyles = makeStyles(styles);

export default function SoeInfoArea(props) {
    const classes = useStyles();
    // const { title, description, vertical } = props;
    const { title, description } = props;
    // const iconWrapper = classNames({
    //     [classes.iconWrapper]: true,
    //     // [classes[iconColor]]: true,
    //     [classes.iconWrapperVertical]: vertical
    // });
    // const iconClasses = classNames({
    //     [classes.icon]: true,
    //     [classes.iconVertical]: vertical
    // });
    return (
        <div className={classes.infoArea}>
            {/* <div className={classes.container}>
                <div
                    style={{
                        backgroundImage: "url(" + image + ")"
                    }}
                >{children}</div> */}
            {/* <div className={iconWrapper}>
                    <props.icon className={iconClasses} />
                </div> */}
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
}

SoeInfoArea.propTypes = {
    // image: PropTypes.string,
    // children: PropTypes.node,
    // icon: PropTypes.object.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    description: PropTypes.string.isRequired,
    // vertical: PropTypes.bool
};
