import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { Box, Paper, Card, CardActionArea } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const icons = ([<FacebookIcon className="socialIcon" key="facebook" />, <TwitterIcon className="socialIcon" key="twitter" />, <LinkedInIcon className="socialIcon" key="linkedin" />, <InstagramIcon className="socialIcon" key="instagram" />]);
render(
  [<App key="content"/>, <Footer className={"footer"} key="footer">{icons.map(icon => {
    return (
      <Card elevation="0" className="socialLink">
          {icon}
      </Card>
    );
  })}</Footer>],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
