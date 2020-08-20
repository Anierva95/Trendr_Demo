import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import BannerCTA from "./components/BannerCTA";
import girlPicture from "./Assets/girlPicture.svg";
import Footer from './components/footer';
import Home from './pages/Home';
import Demo from './pages/Demo'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
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

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/demo" component={Demo}/>
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
