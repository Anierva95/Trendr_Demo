import React, { useRef, useEffect, useState} from "react";
import axios from 'axios';
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Nivo_Bar from "../components/nivo_bar";
import Selector from "../components/selector";
import Nivo_Line from "../components/nivo_line";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import bardata from "../Assets/bardata.json";
import linedata from "../Assets/linedata.json";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "linear-gradient(-90deg,#02203c,#001528)",
    height: "220vh",
  },
  EmptySpace: {
    height: "225vh",
  },
  ChartContainer: {
    height: "50vh",
  },
}));




export default function Demo(props) {



  const classes = useStyles("");
  const person = useRef("");
  const timeDelta = useRef("");
  const Aggregration = useRef("");
  const product1 = useRef("");
  const product2 = useRef("");

  const personMonth = useRef("");
  const timeDeltaMonth = useRef("");
  const AggregrationMonth = useRef("");
  const product1Month = useRef("");
  const product2Month = useRef("");

  const personWeekly = useRef("");
  const timeDeltaWeekly = useRef("");
  const AggregrationWeekly = useRef("");
  const product1Weekly = useRef("");
  const product2Weekly = useRef("");

  return (
    <div className={classes.background}>
      <Navigation />
      <Grid direction="row" justify="center" container>
        <Selector ref={person} label="Sales Person" />
        {/* <Selector ref={timeDelta} label="Time Delta" />
        <Selector ref={Aggregration} label="Aggregration" />
        <Selector ref={product1} label="Product1" />
        <Selector ref={product2} label="Product2" /> */}
      </Grid>

      <Typography color="textPrimary" align="center">
        <h1> Sales by Product Group </h1>
      </Typography>
      <div className={classes.EmptySpace}>
        <div className={classes.ChartContainer}>
          <Nivo_Line data={linedata} />
        </div>
        <div className={classes.ChartContainer}>
          <Typography color="textPrimary" align="center">
            <h1> Monthly Seasonality </h1>
          </Typography>
          <Grid direction="row" justify="center" container>
        {/* <Selector ref={personMonth} label="Sales Person" />
        <Selector ref={timeDeltaMonth} label="Time Delta" />
        <Selector ref={AggregrationMonth} label="Aggregration" />
        <Selector ref={product1Month} label="Product1" />
        <Selector ref={product2Month} label="Product2" /> */}
      </Grid>
          <Nivo_Bar data={bardata} />
          <Typography color="textPrimary" align="center">
            <h1> Weekly Seasonality </h1>
          </Typography>
          <Grid direction="row" justify="center" container>
        {/* <Selector ref={personWeekly} label="Sales Person" />
        <Selector ref={timeDeltaWeekly} label="Time Delta" />
        <Selector ref={AggregrationWeekly} label="Aggregration" />
        <Selector ref={product1Weekly} label="Product1" />
        <Selector ref={product2Weekly} label="Product2" /> */}
      </Grid>
          <Nivo_Bar data={bardata} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
