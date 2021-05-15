import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    title
} from "assets/jss/nextjs-material-kit.js";

const soeInfoStyle = {
    infoArea: {
        width: "500px",
        height: "100px",
        margin: "15px 0px 0px -10px",
        // padding: "40px",
        // transition: "transform .2s", /* Animation */
        // "&:hover,&:focus": {
        //     transform: "scale(1.2)"
        // }
    },
    // container: {
    //     backgroundColor: "rgb(255, 255, 255)",
    //     boxShadow: `0 2px 2px 0 rgb(255, 255, 255), 0 3px 1px -2px rgb(255, 255, 255), 0 1px 5px 0 rgb(255, 255, 255)`,
    //     "&:hover,&:focus": {
    //         backgroundColor: "rgb(255, 255, 255)",
    //         boxShadow: `0 14px 26px -12px rgb(255, 255, 255), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgb(255, 255, 255)`
    //     }
    // },
    // iconWrapper: {
    //     float: "left",
    //     marginTop: "24px",
    //     marginRight: "10px"
    // },
    primary: {
        color: primaryColor
    },
    warning: {
        color: warningColor
    },
    danger: {
        color: dangerColor
    },
    success: {
        color: successColor
    },
    info: {
        color: infoColor
    },
    rose: {
        color: roseColor
    },
    gray: {
        color: grayColor
    },
    // icon: {
    //     width: "36px",
    //     height: "36px"
    // },
    descriptionWrapper: {
        color: grayColor,
        overflow: "hidden",
        padding: "0px 5px 0px 5px"
    },
    title,
    description: {
        color: grayColor,
        overflow: "hidden",
        marginTop: "0px",
        fontWeight: "300"
    }
    // iconWrapperVertical: {
    //     margin: "0 auto",
    //     padding: "8px 0px 0px 0px"
    // },
    // iconVertical: {
    //     width: "61px",
    //     height: "61px"
    // }
};

export default soeInfoStyle;
