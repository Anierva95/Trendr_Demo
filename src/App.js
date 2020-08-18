import React from "react";
import Navigation from "./components/Navigation";
import Grid from "@material-ui/core/Grid";
import girlPicture from "./Assets/girlPicture.svg";
import Banner from "./components/Banner";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  girlImage: {
    height: "50rem",
  }
}));

function App() {

  const classes = useStyles();


  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Grid justify="center" container direction="row">

        <Grid item xs={3}>
          <Typography variant="h6">
            Let us help you cater to your consumer's demands by using our
            advanced recommendation system based on over 
            <strong> 50 million</strong> products.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <img className={classes.girlImage} src={girlPicture}></img>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
