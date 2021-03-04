import React, { useState, useEffect } from 'react'
import { Paper, Container, Typography, Card, makeStyles, CardMedia, CardActionArea, CardActions, CardContent, Box, Button } from '@material-ui/core';
import Data from '../data/constData';

/**
 * TODO:
 * - Add Card action buttons or areas for listings
 * - Add listing url to listings json array
 * - Utilize properties so array can be passed from app.js
 * - add carousel buttons so the user can look at more than three listings
 * - Link call to action to ddf? (maybe)
 */

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        flexWrap: "wrap"
    },
    ig_card_container_mobile: {
        display: "flex",
        flexDirection: "column"
    },
    listingCard: {
        position: "relative",
        boxSizing: "border-box",
        width: "220px",
        height: "200px",
        border: `none`,
        margin: ".5rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        '& > div': {
            position: "absolute",
            top: "85%",
            height: "15%",
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        }
    },
    ig_listing_card_mobile: {
        position: "relative",
        boxSizing: "border-box",
        width: "100%",
        paddingTop: "100%",
        backgroundSize: "cover",
        '& > div': {
            position: "absolute",
            top: "85%",
            height: "15%",
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            '& > *': {
                fontSize: "2rem"
            }
        }
    }
}));

const listings = Data.listings;

export default function ImageGallery(properties) {
    const Classes = useStyles();

    const [state, setState] = useState({
        mobileView: false
    });

    const { mobileView } = state;

    useEffect(() => {
        // If viewport is less than the value of breakpoint then set mobile view
        const breakpoint = 1000;
        const setResponsive = () => {
            //console.log(window.innerWidth);
            return window.innerWidth < breakpoint ? setState(previousState => ({...previousState, mobileView: true})) : setState(previousState => ({...previousState, mobileView: false}));
        };
        setResponsive();
        // Call setResponse everytime the window is resized and once on startup
        window.addEventListener('resize', setResponsive);
    }, []);

    return (
        <Container maxWidth={false} disableGutters={true} component="span" id="properties" style={{paddingTop: "1.5rem", paddingBottom: "1.5rem", backgroundColor: "black"}}>
            <Box p={1}>
                <Typography style={{color: "white"}} variant="h4">
                    Sold Properties
                </Typography>
            </Box>
            <Container maxWidth="md" disableGutters={true} className={mobileView ? Classes.ig_card_container_mobile : Classes.cardContainer}>
            {listings.map(listing => {
                return (
                    <Box key={listing.address} className={mobileView ? Classes.ig_listing_card_mobile : Classes.listingCard} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/houses/${listing.address}.${listing.ext}")`}} >
                        <Box>
                            <Typography variant="body1">
                                {listing.address}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
            </Container>
            <Box p={3}>
                <Button variant="contained" color="primary">
                    <Box p={1}>
                        <Typography style={{color: "white", textTransform: "capitalize"}} variant="h5">
                            Search Listed
                        </Typography>
                    </Box>
                </Button>
            </Box>
        </Container>
    );
}
