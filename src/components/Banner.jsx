import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    Banner: {
      flexGrow: 1,
    }
  }));

export default function Banner(props) {

    const classes = useStyles();

    return(
      <Typography variant="h1" gutterBottom className={classes.Banner}>
      Your product's trends can be hard to follow, <strong>Let us help.</strong>
      </Typography>
      );
}