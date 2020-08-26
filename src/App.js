import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './pages/Home';
import Demo from './pages/Demo'

import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";

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
