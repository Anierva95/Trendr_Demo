import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    background: "white",
    paddingTop: "3em",
    bottom: "0",
    paddingBottom: "3em",
  },
  footerIcon: {
      fontSize: "3rem"
  },
  footerLink: {
      margin: "1rem"
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerItems}>
        <Typography align="center" variant="h3">
          Trendr by AI consult
        </Typography>
        <Grid container justify="center" direction="row">
        <Typography className={classes.footerLink} align="center" variant="body1">
          Home
        </Typography>
        <Typography className={classes.footerLink} align="center" variant="body1">
          Pricing
        </Typography>
        <Typography className={classes.footerLink} align="center" variant="body1">
          Demo
        </Typography>
        <Typography className={classes.footerLink} align="center" variant="body1">
          Contact
        </Typography>
        </Grid>
        <Typography gutterBottom align="center" variant="body1">
          &#169; 2020 AI Consult All rights reserved.{" "}
        </Typography>
        <Typography gutterBottom align="center" variant="body1">
          <a href="#">Privacy</a> | <a href="#">Terms</a>
        </Typography>
        <Typography align="center">
          <LinkedInIcon className={classes.footerIcon} />
        </Typography>
      </div>
    </footer>
  );
}
