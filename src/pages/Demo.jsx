import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/footer'
import Nivo_Bar from '../components/nivo_bar'
import data from '../Assets/data.json'
import Selector from '../components/selector';

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles((theme) => ({
    background: {
      background: "linear-gradient(-90deg,#02203c,#001528)",
      height: "250vh",
    },
    EmptySpace: {
        height: "200vh"
    },
    BarChartContainer: {
      height: "50vh"
    }
  }));

export default function Demo(props) {

const classes = useStyles();


    return(
        <div className={classes.background}>
            <Navigation/>
        <Selector label="Sales Person"/>
        <Selector label="Time Delta" />
        <Selector label="Aggregration"/>
        <Selector label="Product1" />
        <Selector label="Product2"/>

            <Typography color="textPrimary" align="center" >
        <h1> Coming Soon! </h1>
        </Typography>
        <div className={classes.EmptySpace}>
        <div className={classes.BarChartContainer}>
        <Nivo_Bar data={data} />
        </div>
           
        </div>
        <Footer/>

        </div>
    )
}