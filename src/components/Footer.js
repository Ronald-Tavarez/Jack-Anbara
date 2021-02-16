import React from 'react';
import { Typography, makeStyles, Container, Link, Divider, Box } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

// Jss Styling
const useStyles = makeStyles((theme) => ({
    footer: {
        flexShrink: 0,
        textAlign: "center",
        backgroundColor: theme.palette.common.white,
        color: "black",
        padding: "1rem 1rem 3rem 1rem"
    },
    footerDivider: {
        backgroundColor: theme.palette.grey[400],
        height: "2px",
        margin: "1rem 1rem 3rem 1rem"
    },
    footerFlexContainer: {
        display: "flex",
        flexWrap: "wrap"
    },
    footerBasisContainer: {
        flexBasis: "50%"
    },
    footerImage: {
        marginBottom: "1rem"
    },
    footerLinkContainer: {
        display: "flex",
        width: "max-content",
        alignItems: "center",
        textAlign: "left",
        justifyContent: "flex-start",
        margin: ".5rem 0 0 -.5rem",
        padding: "0"
    },
    footerContactContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0",
    },
    footerInfo: {
        display: "flex",
        textAlign: "left",
        alignItems: "center",

        width: "max-content",
        margin: "0"
    },
    footerType: {
        margin: ".5rem"
    }
}));

// TODO: Setup actual links

export default function Footer({children}) {
    const Classes = useStyles();

    return (
        <Container className={Classes.footer}>
            <Divider className={Classes.footerDivider} />
            <Container className={Classes.footerFlexContainer}>
                <Container className={Classes.footerBasisContainer}>
                    <img className={Classes.footerImage} src={`${process.env.PUBLIC_URL}/img/cblogo.png`} />
                </Container>
                <Container className={Classes.footerBasisContainer}>
                    <Box className={Classes.footerInfo} component="span">
                        <EmailIcon  color="primary" />
                        <Typography variant="caption" className={Classes.footerType}>JackAnbara@example.ca</Typography>
                    </Box>
                    <Container className={Classes.footerContactContainer}>
                        <Box className={Classes.footerInfo}>
                            <PhoneAndroidIcon  color="primary"/>
                            <Typography variant="caption" className={Classes.footerType}>Mobile (613)000-0000</Typography>
                        </Box>
                        <Box className={Classes.footerInfo}>
                            <PhoneIcon color="primary" />
                            <Typography variant="caption" className={Classes.footerType}>Office (613)111-1111 ext 234</Typography>
                        </Box>
                    </Container>
                    <Container className={Classes.footerLinkContainer}>
                        {children}
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}