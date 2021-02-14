import React from 'react';
import { Fab, Typography, makeStyles, Container, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
// Jss Styling
const useStyles = makeStyles((theme) => ({
    social: {
        backgroundColor: "white",
        margin: "0 1rem"
    },
    footerMain: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor: "grey",
        flexShrink: 0
    }
}));

// TODO: Setup actual links

export default function Footer(properties) {
    const { social, footerMain } = useStyles();
    const iconList = ([<FacebookIcon key={"facebook"} />, <TwitterIcon key={"twitter"} />, <LinkedInIcon key={"linkedin"} />, <InstagramIcon key={"instagram"} />]);

    return (
        <Container maxWidth={false} className={footerMain}>
            {iconList.map(icon => (
                <Fab key={icon.key} classes={{root: social}} size="small">
                    {icon}
                </Fab>
            ))}
        </Container>
    );
}