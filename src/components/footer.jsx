import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    background: "white",
    paddingTop: "2em"
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <div className={classes.footerItems}>
        <Typography  align="center" variant="h3" mt="10px" >Trendr by AI consult</Typography>
        </div>
    </footer>
  );
}