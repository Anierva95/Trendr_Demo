import React from "react";

import Navigation from "../components/Navigation";
import BannerCTA from "../components/BannerCTA";
import girlPicture from "../Assets/girlPicture.svg";
import Footer from '../components/footer';

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
  }));
  
export default function Home() {
    const classes = useStyles();
  
    return (
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
          >
            Using Trendr is <strong>simple:</strong>
          </Typography>
  
          <Grid justify="space-around" container direction="row">
            <Grid item xs={3}>
              <Typography color="textPrimary" variant="h5" align="center">
                Step 1: Import your CSV
              </Typography>
              <Typography color="textPrimary" align="center">
                <ImportExportIcon />
              </Typography>
              <Typography color="textPrimary" variant="body1" align="center">
                When you are creating a website that is going to be using dynamic
                content (or just creating a demo), and you don’t quite have access
                to what that content is yet…what do you do? You fake it. You put
                in dummy text, and dummy images. Microsoft Word has the feature of
                using “=rand(10,10)” to generate random content, but that doesn’t
                help me in my code editor. The focus is on the design, not the
                content. But running your fingers around on the keyboard for
                random text is kind of a waste of time and it doesn’t really yield
                result that shows “for placement only” type look. Besides, you
                need tags in there to get what you really wanted.
              </Typography>
            </Grid>
  
            <Grid item xs={3}>
              <Typography color="textPrimary" variant="h5" align="center">
                Step 2: Let our model do the work
              </Typography>
              <Typography color="textPrimary" align="center">
                <AdbIcon />
              </Typography>
  
              <Typography color="textPrimary" variant="body1" align="center">
                When you are creating a website that is going to be using dynamic
                content (or just creating a demo), and you don’t quite have access
                to what that content is yet…what do you do? You fake it. You put
                in dummy text, and dummy images. Microsoft Word has the feature of
                using “=rand(10,10)” to generate random content, but that doesn’t
                help me in my code editor. The focus is on the design, not the
                content. But running your fingers around on the keyboard for
                random text is kind of a waste of time and it doesn’t really yield
                result that shows “for placement only” type look. Besides, you
                need tags in there to get what you really wanted.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="textPrimary" variant="h5" align="center">
                Step 3: Get informed!
              </Typography>
              <Typography color="textPrimary" align="center">
                <AssessmentIcon />
              </Typography>
              <Typography color="textPrimary" variant="body1" align="center">
                When you are creating a website that is going to be using dynamic
                content (or just creating a demo), and you don’t quite have access
                to what that content is yet…what do you do? You fake it. You put
                in dummy text, and dummy images. Microsoft Word has the feature of
                using “=rand(10,10)” to generate random content, but that doesn’t
                help me in my code editor. The focus is on the design, not the
                content. But running your fingers around on the keyboard for
                random text is kind of a waste of time and it doesn’t really yield
                result that shows “for placement only” type look. Besides, you
                need tags in there to get what you really wanted.
              </Typography>
            </Grid>
          </Grid>
  
          <Footer/>
        </div>
    );
  }