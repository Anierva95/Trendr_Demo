import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  Tab: {
    textTransform: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" elevation={0}>
        <Grid container direction="row" justify="center">
          <Toolbar justify="center">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Trendr by AI Consult
            </Typography>

            <Tabs>
              <Tab
                className={classes.Tab}
                label="How it works"
                {...a11yProps(0)}
              ></Tab>
              <Tab
                className={classes.Tab}
                label="Pricing"
                {...a11yProps(1)}
              ></Tab>
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.Tab}
              {...a11yProps(2)}
            >
              Demo
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
