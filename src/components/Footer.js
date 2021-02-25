import React from 'react';
import { Typography, makeStyles, Container, Link, Divider, Box, Card } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Data from '../data/constData';

// Jss Styling
const useStyles = makeStyles((theme) => ({
    footer: {
        flexShrink: 0,
        textAlign: "center",
        backgroundColor: theme.palette.grey[100],
        color: "black",
        padding: "1rem 1rem 3rem 1rem",
        '& hr': {
            backgroundColor: theme.palette.grey[400],
            height: "1px",
            margin: "3rem auto",
            width: "90%",
            maxWidth: theme.breakpoints.values.md
        }
    },
    footerFlexContainer: {
        display: "flex",
        flexWrap: "wrap",
        '& > *': {
            flexBasis: "50%"
        }
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
        padding: "0",
        '& > *': {
            backgroundColor: theme.palette.grey[100]
        }
    },
    footerContactContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0",
    },
    footerType: {
        margin: ".5rem"
    }
}));

// TODO: Setup actual links
const icons = ([
    <FacebookIcon className="socialIcon" key="facebook" />,
    <TwitterIcon className="socialIcon" key="twitter" />,
    <LinkedInIcon className="socialIcon" key="linkedin" />,
    <InstagramIcon className="socialIcon" key="instagram" />
]);

const getSocialIcons = () => {
    return icons.map(icon => {
        return (
          <Card key={icon.key} elevation={0} className="socialLink">
              {icon}
          </Card>
        );
    });
};



export default function Footer() {
    const Classes = useStyles();

    const FooterInfo = properties => {
        const {children, window} = properties;

        return (
            <Box style={{display: "flex", textAlign: "left", flexDirection: "row", alignItems: "center", width: "max-content", margin: "0" }}>
                {children}
            </Box>
        );
    }

    return (
        <Container maxWidth={false} className={Classes.footer}>
            <Divider />
            <Container className={Classes.footerFlexContainer}>
                <Container>
                    <img className={Classes.footerImage} src={`${process.env.PUBLIC_URL}/img/cblogo.png`} />
                </Container>
                <Container>
                    <FooterInfo>
                        <EmailIcon  color="primary" />
                        <Typography variant="caption" className={Classes.footerType}>{Data.contactDetails.email}</Typography>
                    </FooterInfo>
                    <Container className={Classes.footerContactContainer}>
                        <FooterInfo>
                            <PhoneAndroidIcon  color="primary"/>
                            <Typography variant="caption" className={Classes.footerType}>{Data.contactDetails.mobile}</Typography>
                        </FooterInfo>
                        <FooterInfo>
                            <PhoneIcon color="primary" />
                            <Typography variant="caption" className={Classes.footerType}>{Data.contactDetails.phone}</Typography>
                        </FooterInfo>
                    </Container>
                    <Container className={Classes.footerLinkContainer}>
                        {getSocialIcons()}
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}
