import React from "react";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import BannerCTA from "./components/BannerCTA";
import girlPicture from "./Assets/girlPicture.svg";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  girlImage: {
    height: "40rem",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Grid justify="center" container direction="row">
        <Grid container item xs={4} direction="column" justify="center">
          <BannerCTA />
          <Button size="large" variant="contained" color="secondary">
            Demo
          </Button>
        </Grid>

        <Grid item xs={6}>
          <img className={classes.girlImage} src={girlPicture}></img>
        </Grid>
      </Grid>

      <Typography variant="h2" align="center">
        Using Trendr is simple:
      </Typography>
      <Grid justify="center" container direction="row">
        <Grid container item xs={4} direction="column" justify="center">
          <BannerCTA />
          <Button size="large" variant="contained" color="secondary">
            Demo
          </Button>
        </Grid>

        <Grid item xs={6}>
          <img className={classes.girlImage} src={girlPicture}></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
