import React, { useRef } from "react";
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
    height: "170vh",
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

  return (
    <div className={classes.background}>
      <Navigation />
      <Grid direction="row" justify="center" container>
        <Selector ref={person} label="Sales Person" />
        <Selector ref={timeDelta} label="Time Delta" />
        <Selector ref={Aggregration} label="Aggregration" />
        <Selector ref={product1} label="Product1" />
        <Selector ref={product2} label="Product2" />
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
          <Nivo_Bar data={bardata} />
          <Typography color="textPrimary" align="center">
            <h1> Weekly Seasonality </h1>
          </Typography>
          <Nivo_Bar data={bardata} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
