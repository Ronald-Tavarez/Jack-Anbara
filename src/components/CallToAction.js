import React, { useState, useEffect } from 'react';
import {Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    headshotContainer: {
        padding: 0,
        marginBottom: "2rem",
        position: "relative"
    },
    title: {
        position: "absolute",
        top: "10%",
        right: "10%",
        fontSize: "8vw",
        color: "white"
    },
    subTitle: {
        position: "absolute",
        fontSize: "3vw",
        top: "29%",
        right: "20%",
        textAlign: "right"
    }
}));

// TODO: Requires mobile render function, no way around it

export default function CallToAction(properties) {
    const Classes = useStyles();
    return (
        <div className={Classes.headshotContainer} >
            <img src={`${process.env.PUBLIC_URL}/img/jackanbara_whole.png`} style={{width: "100%", maxHeight: "100%"}}/>
            <Typography className={Classes.title} variant="h1">Jack Anbara</Typography>
            <Typography className={Classes.subTitle} color="primary" variant="h2">Real Estate Investments</Typography>
        </div>
    );
}
