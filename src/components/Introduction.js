import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

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
        height: "34vw",
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
                zIndex: "1"
            }
        }
    },
    i_title: {
        position: "absolute",
        top: "10%",
        left: "10%",
        fontSize: "clamp(2rem, 8vw, 8rem)",
        color: "white",
        backdropFilter: "brightness(99.5%) blur(.5px)",
        
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
    }
}));

// Main Component
const Introduction = (properties) => {
    const classes = useStyles();

    const clickHandler = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#about_me');
        
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <Container maxWidth={false} disableGutters={true}>
            <Container maxWidth={false} disableGutters={true} className={classes.i_image_container}>
                <Box component="div" p={0}>
                    <Box style={{clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"}} component="div" />
                    <img onClick={clickHandler} style={{clipPath: "polygon(0 63%, 10% 51%, 13% 46%, 7% 35%, 9% 23%, 11% 12%, 22% 3%, 34% 2%, 42% 7%, 48% 14%, 49% 22%, 51% 32%, 48% 43%, 45% 51%, 41% 59%, 48% 64%, 55% 66%, 62% 70%, 66% 77%, 68% 85%, 71% 92%, 69% 100%, 0% 100%, 0 72%)"}} src={`${process.env.PUBLIC_URL}/img/jackanbara_cutout.png`} alt=""/>
                    {/*<img className={classes.i_image} src={`${process.env.PUBLIC_URL}/img/jackanbara_cutout.png`} />*/}
                </Box>
                <Box component="span">
                    <Typography className={classes.i_title} variant="h1">Jack Anbara</Typography>
                    <Typography className={classes.i_subTitle}  variant="h2">Real Estate Investments</Typography>
                </Box>
                <Box className={classes.i_background} component="span" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/parliment.jpg)`}} />
            </Container>
        </Container>
    )
}

export default Introduction