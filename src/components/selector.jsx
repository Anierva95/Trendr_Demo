import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";



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


  const [sales, setSales] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState();
  const [selectedProduct2, setSelectedProduct2] = useState();
  const [selectedProduct3, setSelectedProduct3] = useState();



  useEffect(() => {
    axios.get("http://localhost:8080/api/sale").then(res => {
      console.log(res.data);
      setSales(res.data);
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

  const classes = useStyles();


  return (
    <>
    <Autocomplete
        style={{width: 500}}
        id="tags-standard"
        options={sales}
        onChange={onSelect1}
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
    
      <Autocomplete
      style={{width: 500}}
      id="tags-standard"
      options={sales}
      onChange={onSelect2}
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
    <Autocomplete
    style={{width: 500}}
    id="tags-standard"
    options={sales}
    onChange={onSelect3}
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
