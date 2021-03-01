import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    map_container: {
        backgroundColor: theme.palette.common.black,
        paddingTop: "1rem"
    },
    map_main: {
        padding: "0rem",
        display: "flex",
        flexDirection: "row-reverse",
        '& > iframe': {
            flexBasis: "100%",
            display: "block"
        }
    },
    map_iframe: {
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.primary.main}`
    }
}))

const OfficeMap = properties => {
    const {map_container, map_iframe, map_main} = useStyles()
    return ( 
        <Container disableGutters={true} maxWidth={false} className={map_container}>
            <Container disableGutters={true} maxWidth="md" className={map_main}>
                <iframe className={map_iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.8217605878913!2d-75.78259978420942!3d45.37259167909997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce01368d722c9f%3A0x67b2085212c08bac!2s1090%20Ambleside%20Dr%2C%20Ottawa%2C%20ON%20K2B%208G7!5e0!3m2!1sen!2sca!4v1614374304362!5m2!1sen!2sca" width="600" height="500" loading="lazy"></iframe>
            </Container>
        </Container>
    )
}

export default OfficeMap
