import React, {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery';
import { Divider, Box, makeStyles, TextField, Container, Typography, Button } from '@material-ui/core'

// TODO: Form Validation for email, (regex and class state switch?)
const useStyles = makeStyles((theme) => ({
    email_main: {
        backgroundColor: theme.palette.common.white,
        padding: "2rem 0rem 2rem 0rem"
    },
    email_form: {
        padding: "1rem 3rem 1rem 3rem",
    },
    email_flex_container: {
        display: "flex",
        '& > div:first-child': {
            flexBasis: "80%"
        },
        '& > div:last-child': {
            flexBasis: "20%"
        }
    },
    email_mobile_container: {

    }
}));

export default function EmailSignUp(properties) {
    const [state, setState] = useState({
        mobileView: false,
        snackOpen: false
    });

    const { mobileView, snackOpen } = state;

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

    const { email_main, email_form, email_flex_container, email_mobile_container } = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("submitted")
    };

    return (
        <Container maxWidth={false} className={email_main} disableGutters={true}>
            <Typography variant="h5" style={{textTransform: "capitalize"}}>Sign Up To Receive Off Market Investment Opportunities!</Typography>
            <Container disableGutters={true} maxWidth="md">
            <form className={email_form} id="email_form" name="email_form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <Box className={mobileView ? email_mobile_container : email_flex_container} >
                    <Box p={1}>
                        <TextField style={{width: "100%"}} size="small" variant="outlined" id="form_email_textfield" label="Email" name="email" />
                    </Box>
                    <Box p={1} >
                        <Button style={{width: "100%", height: "2.5rem"}} color="primary" variant="contained" type="submit">
                            <Typography style={{textTransform: "capitalize"}}>
                                Sign Up
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </form>
            </Container>
        </Container>
    )
}
