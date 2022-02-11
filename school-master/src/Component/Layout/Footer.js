import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Footer () {



    return (

      <div>
         <div class="ui hidden divider"></div>
        <footer class="bg-dark text-center text-white">
          <div class="container p-2">
            <section class="mb-2">
              <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Cognizant/" role="button"
              ><FacebookIcon></FacebookIcon></a>
              <a class="btn btn-outline-light btn-floating m-1" href="https://mobile.twitter.com/Cognizant?" role="button">
              <TwitterIcon></TwitterIcon></a>
              <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com/cognizant?utm_medium=copy_link" role="button">
              <InstagramIcon></InstagramIcon></a>
              <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/cognizant/" role="button"> 
              <LinkedInIcon></LinkedInIcon></a>
              <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/sandeshbhoir123" role="button">
              <GitHubIcon></GitHubIcon></a>
            </section>
            <section class="mb-1">
              <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [SCHOOL] (“we,” “us” or “our”), concerning your access to and use of the [onlineSCHOOLS.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
              </p>
            </section>
          </div>
          <div class="text-center p-1">
            © 2021 Copyright: 
            <a class="text-white" href="/">SCHOOL</a>
          </div>
        </footer>
      </div>
    );
}