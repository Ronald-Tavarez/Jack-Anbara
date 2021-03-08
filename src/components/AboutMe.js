import { Container, Typography, makeStyles, Box } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

const useStyles = makeStyles( theme => ({
    about_container: {
        backgroundColor: theme.palette.grey[200],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
        position: "relative",
        '& > span': {
            height: "100%",
            width: "100%",
            backgroundColor: theme.palette.common.white,
            position: "absolute",
            zIndex: "0",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)"
        }
    },
    about_main: {
        padding: "3rem",
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: theme.palette.common.black,
        zIndex: "1",
        '& > div:first-child': {
            flexBasis: "30%",
            border: `1px solid ${theme.palette.grey[300]}`,
            backgroundColor: theme.palette.grey[100],
            padding: "2rem 1rem"
        },
        '& > div:last-child': {
            flexBasis: "60%"
        }
    }
}));

export default function AboutMe(properties) {

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

    const {about_container, about_main} = useStyles();

    return (
        <Container id="about_me" disableGutters={true} maxWidth={false} className={about_container}>
            <Box component="span" />
            <Container style={mobileView ? {flexDirection: "column"} : {flexDirection: "row"}} maxWidth="md" disableGutters={true} className={about_main}>
                <Box style={{width: mobileView ? "200px" : "100%", margin: mobileView ? "1rem auto" : "0", backgroundImage: `url(${process.env.PUBLIC_URL}/img/jackanbara_cutout_cropped.png)`, backgroundSize: mobileView ? "cover" : "contain", backgroundRepeat: "no-repeat", minHeight: "200px"} }>
                    {/* Another photo of jack here, preferably better quality */}
                    
                </Box>
                <Box>
                    <Box p={1}>
                        <Typography style={{textAlign: mobileView ? "center" : "left", filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, .1))"}} color="primary" variant="h3">
                            Jack Anbara
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="body1">
                            Jack was born and raised in the Ottawa/Gatineau and has been in the real estate business since he was 22 years old.
                            His positivity and transparency are all part of the professionalism and value he offers. 
                            Early in his career the interest was geared towards investment properties. 
                            He won the Rookie of the year award at one of Ottawa's largest offices and went along to becoming an award winning agent year after year.
                            He specializes in helping clients efficiently build real estate portfolios or expanding their current portfolios here in the nation's capital.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}