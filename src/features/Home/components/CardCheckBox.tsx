import React from 'react'
import CheckBoxBase from 'components/CheckBoxBase'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        padding: theme.spacing(1),
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

type ICardCheckBox = {
    data?:any,
    handleChange?: (value:string)=>void
}
const CardCheckBox = ({data,handleChange}:ICardCheckBox)=>{
    const classes = useStyles();
    return (
        <>
            {
                data.map((item:any)=>(
                    <Grid className={classes.root} item xs={4}>
                        <Paper className={classes.card}>
                            <h4>{item.service}</h4>
                            <CheckBoxBase handleChange={handleChange} service={item.service} data={item.options}/>
                        </Paper>
                    </Grid>
                ))
            }
        </>
    )
}

export default CardCheckBox