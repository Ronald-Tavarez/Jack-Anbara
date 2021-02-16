import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slide, useScrollTrigger, MenuItem, Link, AppBar, Toolbar, Button, Typography, makeStyles, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link as RouterLink } from "react-router-dom";

// No api so statically typed data for now
const linkData = [
    {
        text: "Properties",
        href: "/#properties"
    },
    {
        text: "Newsletter",
        href: "/#newsletter"
    },
    {
        text: "About Me",
        href: "/#aboutme"
    },
    {
        text: "Contact",
        href: "/#contact"
    }
]

// jss styling hook
const useStyles = makeStyles(() => ({
    logoIcon: {
        height: "clamp( 1.2rem, 5vw, 2.4rem)",
        width: "auto",
        verticalAlign: "middle",
        marginRight: ".4em"
    },
    logoText: {
        color: "#225ba7",
        fontFamily: "Montserrat",
        fontWeight: "900",
        fontSize: "clamp( 0.66rem, 3vw, 1.2rem)"
    },
    nav: {
       backgroundColor: "#FFFFFF",
       paddingLeft: "3%",
       paddingRight: "3%"
    },
    menuButton: {
        color: "black",
        fontFamily: "Raleway",
        fontWeight: "500",
        marginLeft: "2.5rem",
        fontSize: "1rem",
        textTransform: "capitalize"
    },
    toolFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    drawerContainer: {
        padding: "20px 30px",
    },
    drawer: {
        color: "black",
        fontFamily: "Raleway",
        fontWeight: "500",
        fontSize: "1rem",
        textTransform: "capitalize"
    }
 }));

// The actual component
export default function Navbar(properties) {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        // If viewport is less than the value of breakpoint then set mobile view
        const breakpoint = 1050;
        const setResponsive = () => {
            //console.log(window.innerWidth);
            return window.innerWidth < breakpoint ? setState(previousState => ({...previousState, mobileView: true})) : setState(previousState => ({...previousState, mobileView: false}));
        };
        setResponsive();
        // Call setResponse everytime the window is resized and once on startup
        window.addEventListener('resize', setResponsive);
    }, []);

    // destructure each property to create separate classes
    const { nav, logoText, logoIcon, menuButton, toolFlex, drawerContainer, drawer } = useStyles();

    // Logo Side of navbar, Contains Logo image and text "coldwell banker | sarazen realty"
    const Logo = ( 
    <Typography variant="h6" component="h1">
        <img className={logoIcon} src="cblogo.png" />
        <span className={logoText} >Coldwell Banker | Sarazen Realty</span>
    </Typography>
    );

    // Link side of navbar, maps static array of link objects to material ui buttons
    const getMenuButtons = () => {
        return linkData.map(({ text, href }) => {
            return (
                <Button {...{ key: text}}>
                    {text}
                </Button>
            );
        });
    };

    // essentially the mobile drawer version of getMenuButtons
    const getDrawerButtons = () => {
        return linkData.map(({ text, href }) => {
            return (
                <Button {...{ key: text }}>
                    <MenuItem className={drawer}>{text}</MenuItem>
                </Button>
            )
        });
    };

    // Used for mobile rendering
    const renderMobile = () => {
        const drawerHandler = () => {
            // Toggles the drawerOpen state
            setState(previousState => ({...previousState, drawerOpen: !drawerOpen}));
        };
        return (
            <Toolbar className={toolFlex}>
                <span>{Logo}</span>
                <IconButton {...{onClick: drawerHandler, edge: "start", "aria-label": "menu", "aria-haspopup": "true"}}>
                    <MenuIcon />
                </IconButton>
                <Drawer {...{anchor: "right", open: drawerOpen, onClose: drawerHandler}}>
                    <div className={drawerContainer}>{getDrawerButtons()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    // Used for desktop or wide screen rendering
    const renderDesktop = () => {
        return (
            <Toolbar className={toolFlex}>
                <span>{Logo}</span>
                <span>{getMenuButtons()}</span>
            </Toolbar>
        );
    };

    // Hides the navbar on scroll for easier reading of page content
    const HideOnScroll = properties => {
        const { children, window } = properties;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });
        return (
            <Slide appear={false} direction="down" in={!trigger}>
              {children}
            </Slide>
          );
    };

    // Set required proptypes to check for argument errors
    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    // Final Return Statement, the overall structure of the navbar
    return (
        <nav>
            {/* Main Navbar, Disappears on Scroll */}
            <HideOnScroll {...properties}>
                <AppBar className={nav}>{mobileView ? renderMobile() : renderDesktop()}</AppBar>
            </HideOnScroll>
        </nav>
    );
}


