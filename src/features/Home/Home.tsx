import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// components
import CardCheckBox from './components/CardCheckBox';
import DataJson from './components/DataJson';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  },
  card: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  }
}));

const data = [
  {
    id:1,
    service: "Service1",
    options: [{
      id:1,
      value:"option1",
      checked:false
    },
    {
      id:2,
      value:"option2",
      checked:false
    },
    {
      id:3,
      value:"option3",
      checked:false
    },
  ]
  },
  {
    id:2,
    service: "Service2",
    options: [{
      id:1,
      value:"option4",
      checked:false
    },
    {
      id:2,
      value:"option5",
      checked:false
    },
    {
      id:3,
      value:"option6",
      checked:false
    }]
  },
  {
    id:3,
    service: "Service3",
    options: [{
      id:1,
      value:"option7",
      checked:false
    },
    {
      id:2,
      value:"option8",
      checked:false
    },
    {
      id:3,
      value:"option9",
      checked:false
    }]
  },
  {
    id:4,
    service: "Service4",
    options: [{
      id:1,
      value:"option10",
      checked:false
    },
    {
      id:2,
      value:"option11",
      checked:false
    },
    {
      id:3,
      value:"option12",
      checked:false
    }]
  },
  {
    id:5,
    service: "Service5",
    options: [{
      id:1,
      value:"option13",
      checked:false
    },
    {
      id:2,
      value:"option14",
      checked:false
    },
    {
      id:3,
      value:"option15",
      checked:false
    }]
  },
  {
    id:6,
    service: "Service6",
    options: [{
      id:1,
      value:"option16",
      checked:false
    },
    {
      id:2,
      value:"option17",
      checked:false
    },
    {
      id:3,
      value:"option18",
      checked:false
    }]
  }
]

function Home() {
  const classes = useStyles();
  const [serviceData,setServiceData]=useState(data)
  const [result,setResult]=useState({})

  // handle change value
  const handleChange = (value:string)=>{

    const service = serviceData.find(s=>s.service == value.target.name)
    const option = service.options.find(s=>s.value == value.target.value)
  
    const oldOptions = service.options.filter(o=>o.value != option.value)
    const oldData = serviceData.filter(s=>s.service != service.service)

    const optional = [...oldOptions,{...option,checked:!option.checked}]
    const newService = {...service,options:optional.sort((a,b)=>a.id-b.id)}

    const newData = [...oldData,newService]

    setServiceData(newData.sort((a,b)=>a.id-b.id))
  }

  useEffect(()=>{
    const result = {}
    for(const el of serviceData){
      result[el.service]= {}
      for(const otp of el.options.filter(o => o.checked)){
        result[el.service][otp.value]= otp.value
      }
    }
    setResult(result)
  },[serviceData])

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <CardCheckBox handleChange={handleChange} data={serviceData}/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <DataJson result={result}/>
              </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default Home
