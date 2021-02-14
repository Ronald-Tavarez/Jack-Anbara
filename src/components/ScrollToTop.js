import React, { useState, useEffect } from 'react';
import { makeStyles, Fab, useScrollTrigger, Zoom } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles( theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    scroll: {
        backgroundColor: "#225ba7",
        color: "white",
        '&:hover': {
            color: 'black'
        }
    }
}));


export default function ScrollToTop(properties) {

    const { root, scroll } = useStyles();

    const ScrollTop = properties => {
        const {children, window } = properties;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const ClickHandler = event => {
            const anchor = (event.target.ownerDocument || document).querySelector('#top-anchor');
            
            if (anchor)
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        return (
            <Zoom in={trigger}>
              <div onClick={ClickHandler} role="presentation" className={root}>
                {children}
              </div>
            </Zoom>
          );
    };

    return ( 
        <ScrollTop {...properties}>
            <Fab classes={{ root: scroll}} size="medium" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    );
}