import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

type ISelectBase  = {
    title?:string,
    value?:string,
    label?:string,
    handleChange?: (value:string)=>void;
}

const colors = [
    {
        value:"#c0392b",
        name:"Red"
    },
    {
        value:"#2980b9",
        name:"Blue"
    },
    {
        value:"#f39c12",
        name:"Yellow"
    },
    {
        value:"#8e44ad",
        name:"Pink"
    },
    {
        value:"#2c3e50",
        name:"Midnight Blue"
    },
    {
        value:"#bdc3c7",
        name:"Silver"
    },
    {
        value:"#27ae60",
        name:"Green"
    }
]
const SelectBase = ({title,value,label,handleChange}:ISelectBase)=>{
    const classes = useStyles();
    return (
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={value}
            onChange={handleChange}
            label={label}
            >
                {
                    colors.map((item:any)=>(
                        <MenuItem value={item.value}>{item.name}&nbsp;<span style={{backgroundColor:`${item.value}`,width:"10px",height:"10px"}}></span></MenuItem>
                    ))
                }
            </Select>
      </FormControl>
    )
}

export default SelectBase