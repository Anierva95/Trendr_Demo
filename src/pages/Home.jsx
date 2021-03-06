import React from "react";

import Navigation from "../components/Navigation";
import BannerCTA from "../components/BannerCTA";
import girlPicture from "../Assets/girlPicture.svg";
import Footer from "../components/footer";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AdbIcon from "@material-ui/icons/Adb";

const useStyles = makeStyles((theme) => ({
  girlImage: {
    height: "50rem",
  },
  background: {
    background: "linear-gradient(-90deg,#02203c,#001528)",
  },
  icon: {
    fontSize: "5rem",
  },
  stepBox: {
    border: "1px solid white",
    marginBottom: "7em",
    padding: "1.5em",
  },
  stepBanner: {
    marginBottom: "1em",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background}>
        <Navigation />
        {/* <Banner /> */}
        <Grid justify="center" container direction="row">
          <Grid container item xs={4} direction="column" justify="center">
            <BannerCTA />
            <Button variant="contained" color="secondary">
              Demo
            </Button>
          </Grid>

          <Grid item xs={7}>
            <img className={classes.girlImage} src={girlPicture}></img>
          </Grid>
        </Grid>

        <Typography
          gutterBottom
          color="textPrimary"
          variant="h2"
          align="center"
          className={classes.stepBanner}
        >
          Using Trendr is{" "}
          <u>
            <strong>simple</strong>
          </u>
        </Typography>

        <Grid justify="space-around" container direction="row">
          <Grid item className={classes.stepBox} xs={3}>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="h4"
              align="center"
            >
              Import your CSV
            </Typography>
            <Typography color="textPrimary" align="center">
              <ImportExportIcon gutterBottom className={classes.icon} />
            </Typography>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="body1"
              align="center"
            >
              When you are creating a website that is going to be using dynamic
              content (or just creating a demo), and you don’t quite have access
              to what that content is yet…what do you do? You fake it. You put
              in dummy text, and dummy images. Microsoft Word has the feature of
              using “=rand(10,10)” to generate random content, but that doesn’t
              help me in my code editor.
            </Typography>
          </Grid>

          <Grid className={classes.stepBox} item xs={3}>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="h4"
              align="center"
            >
              Our model predicts
            </Typography>
            <Typography color="textPrimary" align="center">
              <AdbIcon gutterBottom className={classes.icon} />
            </Typography>

            <Typography
              gutterBottom
              color="textPrimary"
              variant="body1"
              align="center"
            >
              When you are creating a website that is going to be using dynamic
              content (or just creating a demo), and you don’t quite have access
              to what that content is yet…what do you do? You fake it. You put
              in dummy text, and dummy images. Microsoft Word has the feature of
              using “=rand(10,10)” to generate random content, but that doesn’t
              help me in my code editor.
            </Typography>
          </Grid>
          <Grid className={classes.stepBox} item xs={3}>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="h4"
              align="center"
            >
              Get informed!
            </Typography>
            <Typography color="textPrimary" align="center">
              <AssessmentIcon gutterBottom className={classes.icon} />
            </Typography>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="body1"
              align="center"
            >
              When you are creating a website that is going to be using dynamic
              content (or just creating a demo), and you don’t quite have access
              to what that content is yet…what do you do? You fake it. You put
              in dummy text, and dummy images. Microsoft Word has the feature of
              using “=rand(10,10)” to generate random content, but that doesn’t
              help me in my code editor.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
