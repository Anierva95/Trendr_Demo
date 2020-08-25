import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/footer'
import Nivo_Bar from '../components/nivo_bar'
import data from '../Assets/data.json'

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
    EmptySpace: {
        height: "100vh"
    }
  }));

export default function Demo(props) {

const classes = useStyles();


    return(
        <div className={classes.background}>
            <Navigation/>
            <Typography color="textPrimary" align="center" >
        <h1> Coming Soon! </h1>
        </Typography>
        <div className={classes.EmptySpace}>
            <Nivo_Bar data={data} />

        </div>
        <Footer/>

        </div>
    )
}