import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    Banner: {
      fontSize: "4rem",
      textAlign: "center",
      marginTop: "1em",
      marginBottom: "1em",
    }
  }));

export default function Banner(props) {

    const classes = useStyles();

    return(
      <Typography variant="h1" gutterBottom className={classes.Banner}>
      Your product playbook, <strong>right at your fingertips.</strong>
      </Typography>
      );
}