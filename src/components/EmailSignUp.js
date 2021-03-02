import React, {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery';
import { Divider, Box, makeStyles, TextField, Container, Typography, Button } from '@material-ui/core'

// TODO: Form Validation for email, (regex and class state switch?)
const useStyles = makeStyles((theme) => ({
    email_main: {
        backgroundColor: theme.palette.common.black,
        padding: "2rem 0rem 2rem 0rem",
        color: theme.palette.common.white
    },
    email_form: {
        padding: "1rem 3rem 1rem 3rem",
        color: theme.palette.common.white
    },
    email_flex_container: {
        display: "flex",
        color: theme.palette.common.white,
        '& > div:first-child': {
            flexBasis: "80%",
            color: theme.palette.common.white
        },
        '& > div:last-child': {
            flexBasis: "20%",
            color: theme.palette.common.white
        }
    },
    email_mobile_container: {
        color: theme.palette.common.white
    },
    email_input: {
        backgroundColor: theme.palette.common.white
    },
    email_css_label: {
        color: theme.palette.primary.main,
        
    },
    email_css_focused: {
        borderColor: `${theme.palette.primary.main} !important`
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

    const { email_main, email_form, email_flex_container, email_mobile_container, email_input, email_css_label, email_css_focused } = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("submitted")
    };
    
    return (
        <Container maxWidth={false} className={email_main} disableGutters={true}>
            <Typography variant="h5" style={{textTransform: "capitalize"}}>Sign Up To Receive Off Market Investment Opportunities!</Typography>
            <Container disableGutters={true} maxWidth="md">
            <form className={email_form} id="email_form" name="email_form" method="POST" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="email_form" />
                <Box className={mobileView ? email_mobile_container : email_flex_container} >
                    <Box p={1}>
                        <TextField InputLabelProps={{classes: { root: email_css_label, focused: email_css_focused}}} InputProps={{className: email_input}} style={{width: "100%"}} size="small" variant="outlined" type="email" id="form_email_textfield" label="Email" name="email" />
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
