import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "green",
    color: "black"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Selector(props) {

  const classes = useStyles();


  return (
    <>
    <Autocomplete
        style={{width: 500}}
        id="tags-standard"
        options={props.sales}
        onChange={props.onSelect1}
        getOptionLabel={(sales) => sales.Produto}
        // defaultValue={[sales[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Products"
            placeholder="Search Products"
          />
        )}
      />
  </>
  );
}
