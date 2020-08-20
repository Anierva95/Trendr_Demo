import React from "react";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import BannerCTA from "./components/BannerCTA";
import girlPicture from "./Assets/girlPicture.svg";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme";


const useStyles = makeStyles((theme) => ({
  girlImage: {
    height: "50rem",
  },
  background: {
    background: "linear-gradient(-90deg,#02203c,#001528)"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
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

      <Typography variant="h2" align="center">
        Using Trendr is <strong>simple:</strong>
      </Typography>

      <Grid justify="space-around" container direction="row">
        <Grid item>

        <Typography variant="h6" align="center">
        Step 1
      </Typography>
          
          </Grid>

        <Grid item>

        <Typography variant="h6" align="center">
        Step 2
      </Typography>
          </Grid>
        <Grid item>

        <Typography variant="h6" align="center">
        Step 3
      </Typography>
          </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;
