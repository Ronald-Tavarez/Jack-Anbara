import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

/**
 *  @author: Ronald Tavarez
 *  @desc: Landing page introduction component, showcases jack's picture and company motto
 */

//  MUI JSS styling hook
const useStyles = makeStyles(theme => ({
    i_image_container: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        padding: "0",
        height: "40vw",
        backgroundColor: theme.palette.primary.dark,
        zIndex: "0",
        '& > div': {
            position: "relative",
            backgroundColor: "none",
            pointerEvents: "none",
            height: "auto",
            width: "100%",
            gridColumn: "4 / 5",
            gridRow: "4 / 5",
            '&:hover': {
                '& > div': {
                    backgroundColor: theme.palette.grey[400],
                },
                '& > img': {
                    transform: "translateY(-10%) translateX(-10%) scaleX(-1.2) scaleY(1.2)"
                }
            },
            '& > img': {
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "140%",
                marginLeft: "-30%",
                height: "auto",
                pointerEvents: "auto",
                transition: "transform 0.2s ease-out",
                cursor: "pointer",
                transform: "scaleX(-1)",
                userSelect: "none",
                userDrag: "none",
                zIndex: "2"
            },
            '& > div': {
                position: "absolute",
                bottom: "0",
                right: "0",
                height: "400%",
                paddingLeft: "200%",
                transition: "background-color 0.2s ease-out",
                backgroundColor: theme.palette.grey[100],
                zIndex: "1",
                clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"
            }
        }
    },
    i_image_container_mobile: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "76vh",
        minHeight: "88vw",
        overflowX: "hidden",
        '& > div': {
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            zIndex: "2",
            '&:hover': {
                '& > img': {
                    transform: "translateY(-10%) translateX(10%) scaleX(1.2) scaleY(1.2)"
                },
                '& > div': {
                    backgroundColor: theme.palette.primary.dark
                }
            },
            '& > img': {
                position: "absolute",
                width: "clamp(0px, 100%, 450px)",
                height: "auto",
                pointerEvents: "auto",
                bottom: "0",
                left: "0",
                zIndex: "4",
                transition: "transform 0.2s ease-out",
                cursor: "pointer"
            },
            '& > div': {
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "50%",
                paddingLeft: "50%",
                backgroundColor: theme.palette.primary.main,
                clipPath: "circle(90% at 0 100%)",
                zIndex: "1",
                transition: "background-color 0.2s ease-out"
            },
            
        }

    },
    i_title: {
        position: "absolute",
        top: "10%",
        left: "10%",
        fontSize: "clamp(2rem, 8vw, 8rem)",
        color: "white",
        backdropFilter: "brightness(99.5%) blur(.5px)",
        zIndex: "3"
    },
    i_title_mobile: {
        position: "absolute",
        color: "white",
        fontSize: "16vw",
        top: "5%",
        left: "6%",
        zIndex: "3"
    },
    i_subTitle: {
        position: "absolute",
        fontSize: "4vw",
        top: "35%",
        left: "10%",
        textAlign: "right",
        color: theme.palette.common.white,
        backdropFilter: "brightness(99.5%) blur(.5px)"
    },
    i_subTitle_mobile: {
        position: "absolute",
        color: theme.palette.common.white,
        top: "20%",
        left: "6%",
        zIndex: "3",
        fontSize: "8vw"
    },
    i_background: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "-1",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 0%",
        clipPath: "polygon(0 0, 94% 0, 44% 100%, 0% 100%)",
        filter: "blur(0px)",
        backgroundAttachment: "fixed"
    },
    i_background_mobile: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "-1",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
}));

// Main Component
const Introduction = (properties) => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false
    });

    const { mobileView } = state;

    useEffect(() => {
        // If viewport is less than the value of breakpoint then set mobile view
        const breakpoint = 800;
        const setResponsive = () => {
            //console.log(window.innerWidth);
            return window.innerWidth < breakpoint ? setState(previousState => ({...previousState, mobileView: true})) : setState(previousState => ({...previousState, mobileView: false}));
        };
        setResponsive();
        // Call setResponse everytime the window is resized and once on startup
        window.addEventListener('resize', setResponsive);
    }, []);

    const clickHandler = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#info_section');
        
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <Container maxWidth={false} disableGutters={true}>
            <Container maxWidth={false} disableGutters={true} className={mobileView ? classes.i_image_container_mobile: classes.i_image_container}>
                <Box component="div" p={0}>
                    <Box component="div" />
                    <img onClick={clickHandler} style={{clipPath: "polygon(0 63%, 10% 51%, 13% 46%, 7% 35%, 9% 23%, 11% 12%, 22% 3%, 34% 2%, 42% 7%, 48% 14%, 49% 22%, 51% 32%, 48% 43%, 45% 51%, 41% 59%, 48% 64%, 55% 66%, 62% 70%, 66% 77%, 68% 85%, 71% 92%, 69% 100%, 0% 100%, 0 72%)"}} src={`${process.env.PUBLIC_URL}/img/jackanbara_cutout.png`} alt=""/>
                    {/*<img className={classes.i_image} src={`${process.env.PUBLIC_URL}/img/jackanbara_cutout.png`} />*/}
                </Box>
                <Box component="span">
                    <Typography className={mobileView ? classes.i_title_mobile : classes.i_title} variant="h1">Jack Anbara</Typography>
                    <Typography className={mobileView ? classes.i_subTitle_mobile : classes.i_subTitle}  variant="h2">Real Estate Investments</Typography>
                </Box>
                <Box className={mobileView ? classes.i_background_mobile : classes.i_background} component="span" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/parliment.jpg)`}} />
            </Container>
        </Container>
    )
}

export default Introduction