import React, { useRef, useEffect, useState} from "react";
import axios from 'axios';
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Nivo_Bar from "../components/nivo_bar";
import Selector from "../components/selector";
import Nivo_Line from "../components/nivo_line";
import Group_Line from "../components/group_line";

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

  const [sales, setSales] = useState([]);
  const [groups, setGroups] = useState([]);
  const [groupSales, setGroupSales] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState();
  const [selectedProduct2, setSelectedProduct2] = useState();
  const [selectedProduct3, setSelectedProduct3] = useState();
  const [selectedProduct4, setSelectedProduct4] = useState();


  useEffect(() => {
    axios.get("http://localhost:8080/api/sale").then(res => {
      console.log(res.data);
      setSales(res.data);
      setSelectedProduct1(res.data[0]);
      setSelectedProduct2(res.data[20]);
      setSelectedProduct3(res.data[50]);
      setSelectedProduct4("PEELINGS");
    })

    axios.get("http://localhost:8080/api/uniqueGroup").then(res => {
      console.log(res.data[0]);
      setGroups(res.data[0]);
    })
  },[]);

  const onSelect1 = (e, value) => {
    setSelectedProduct1(value);
  }
  const onSelect2 = (e, value) => {
    setSelectedProduct2(value);
  }
  const onSelect3 = (e, value) => {
    setSelectedProduct3(value);
  }
  const onSelect4 = (e, value) => {
    setSelectedProduct4(value);
    let groupSales = sales.filter(sale => {
      return sale.Grupo == selectedProduct4
    })
    setGroupSales(groupSales);
  }

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
      <button onClick={() => console.log(selectedProduct3)}></button>
      <Grid direction="row" justify="center" container>
        <Selector onSelect1={onSelect1} sales={sales} ref={person}  />
        <Selector onSelect1={onSelect2} sales={sales} ref={person} />
        <Selector onSelect1={onSelect3} sales={sales} ref={person}  />

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
          <Nivo_Line item1={selectedProduct1} item2={selectedProduct2} item3={selectedProduct3}  data={linedata} />
        </div>
        <div className={classes.ChartContainer}>
          <Typography color="textPrimary" align="center">
            <h1> Sales by Product Group </h1>
          </Typography>
          <Grid direction="row" justify="center" container>
        {/* <Selector ref={personMonth} label="Sales Person" />
        <Selector ref={timeDeltaMonth} label="Time Delta" />
        <Selector ref={AggregrationMonth} label="Aggregration" />
        <Selector ref={product1Month} label="Product1" />
        <Selector ref={product2Month} label="Product2" /> */}
      <Selector label="Groups" onSelect1={onSelect4} sales={groups} ref={person} />

      </Grid>
          <Group_Line item4={selectedProduct4} groupSales={groupSales} />
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
