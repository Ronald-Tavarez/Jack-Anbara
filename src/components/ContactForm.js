import { Container, TextField, makeStyles, Box, Button, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'

const useStyles = makeStyles( theme => ({
    cf_container: {
        position: "relative",
        backgroundColor: theme.palette.common.black,
        '& > span': {
            position: "absolute",
            height: "100%",
            width: "50%",
            backgroundColor: theme.palette.primary.main,
            right: "0%",
            top: "0%",
            clipPath: "polygon(100% 100%, 0 0, 100% 0)",
        },
    },
    cf_main: {
        position: "relative",
        '& > form': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            minHeight: "40vh",
            padding: "3rem 3rem 1rem 3rem",
        }
    },
    cf_flex_container: {
        display: "flex",
        justifyContent: "space-between",
        '& > div': {
            flexBasis: "50%"
        }
    },
    cf_textfield: {
        width: "100%",
        backgroundColor: theme.palette.common.white,
        borderRadius: "5px"
    }
}));

const ContactForm = (properties) => {

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

    const {cf_container, cf_main, cf_flex_container, cf_textfield} = useStyles();
    return(
        <Container disableGutters={true} className={cf_container} maxWidth={false}>
            <Box component="span" />
            <Container disableGutters={true} maxWidth="md" className={cf_main}>
                <form id="contact_form" name="contact_form" method="POST" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact_form" />
                    <Box className={cf_flex_container} style={mobileView ? {flexDirection: "column"} : {flexDirection: "row"}}>
                        <Box p={1}>
                            <TextField className={cf_textfield} size="small" type="text" name="name" id="name" label="Full Name" variant="outlined" />
                        </Box>
                        <Box p={1}>
                            <TextField className={cf_textfield} size="small" type="text" name="phone" id="phone" label="Phone" variant="outlined" />
                        </Box>
                    </Box>
                    <Box p={1}>
                        <TextField className={cf_textfield} size="small" name="email" id="email" label="Email" variant="outlined" />
                    </Box>
                    <Box p={1}>
                        <TextField className={cf_textfield} size="small" name="message" id="message" label="Message" variant="outlined" multiline rows={10} />
                    </Box>
                    <Box p={1} style={{display: "flex", flexDirection: "row-reverse"}}>
                        <Button style={{width: mobileView ? "100%" : "20%", height: "2.5rem"}} color="primary" variant="contained" type="submit">
                            <Typography style={{textTransform: "capitalize"}}>
                                Contact
                            </Typography>
                        </Button>
                    </Box>
                </form>
            </Container>
        </Container>
    )
}

export default ContactForm