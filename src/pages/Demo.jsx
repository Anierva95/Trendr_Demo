import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/footer'

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    girlImage: {
      height: "50rem",
    },
    background: {
      background: "linear-gradient(-90deg,#02203c,#001528)",
      height: "100vh",
    },
  }));

export default function Demo(props) {

const classes = useStyles();


    return(
        <div className={classes.background}>
            <Navigation/>
            <Typography color="textPrimary" align="center" >
        <h1> Coming Soon! </h1>
        </Typography>
        <Footer/>

        </div>
    )
}