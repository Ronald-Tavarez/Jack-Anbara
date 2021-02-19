import React, {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery';
import { Divider, Box, makeStyles, TextField, Container, Typography, Button } from '@material-ui/core'

// TODO: Form Validation for email, (regex and class state switch?)
const useStyles = makeStyles((theme) => ({
    form_email: {
        padding: "1vw"
    },
    flexContainer: {
        display: "grid",
    }
}));

export default function EmailSignUp(properties) {
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

    const { form_email, flexContainer } = useStyles();
   
    return (
        
        <Container size="small">
            <form className={form_email} >
                <Typography variant="h5" style={{textTransform: "capitalize"}}>Sign Up To Receive Off Market Investment Opportunities!</Typography>
                <Container maxWidth="sm" className={flexContainer} style={mobileView ? {gridTemplateColumns: "1fr"} : {gridTemplateColumns: "4fr 1fr"}}>
                    <Box p={1} style={{display: "inline"}}>
                        <TextField style={{width: "100%"}} size="small" variant="outlined" id="form_email_textfield" label="Email"/>
                    </Box>
                    <Box p={1} style={{display: "inline"}}>
                        <Button style={{width: "100%", height: "2.5rem"}} color="primary" variant="contained" type="submit">
                            <Typography style={{textTransform: "capitalize"}}>
                                Sign Up
                            </Typography>
                        </Button>
                    </Box>
                </Container>
                <Box p={1}>
                    <Divider style={{margin: "1rem 1rem 2.5rem 1rem", background: "grey", }}/>
                </Box>
                <ImageGallery />
            </form>
        </Container>
        
    )
}
