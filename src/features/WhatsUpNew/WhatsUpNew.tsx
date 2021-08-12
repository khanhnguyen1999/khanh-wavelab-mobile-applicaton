import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// component
import PhoneView from 'components/PhoneView'
import ButtonBase from 'components/ButtonBase'
import TextFields from 'components/TextFields'
import Textarea from 'components/TextArea'
import SelectBase from 'components/SelectBase'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const WhatsUpNew = ()=>{
    const classes = useStyles();
    const [form,setForm]=useState({
        url:'',
        heading:'',
        name:'',
        paragraph:'',
        color:'#2c3e50'
    })
    const [theme,setTheme]=useState({})

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        setForm(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleChange = (value:string)=>{
        setForm(prev=>({
            ...prev,
            ["color"]: value.target.value
        }))
    }
    const handleTextarea = (value:string)=>{
        setForm(prev=>({
            ...prev,
            ["paragraph"]: value.target.value
        }))
    }


    const handleSubmit = () => {
        setTheme({...form})
    }

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <h4>Change Theme for Mobile</h4>
                    <TextFields
                        type="text"
                        name="url"
                        onChange={onChangeField}
                        placeholder="Url logo..."
                    />
                    <TextFields
                        type="text"
                        name="heading"
                        onChange={onChangeField}
                        placeholder="Heading..."
                    />
                    <TextFields
                        type="text"
                        name="name"
                        onChange={onChangeField}
                        placeholder="Name..."
                    />
                    <Textarea onChange={handleTextarea}/>
                    <SelectBase handleChange={handleChange}/>
                </Paper>
                <ButtonBase handleSubmit={handleSubmit} className="mt-3" text="Save and Preview" variant="contained"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <PhoneView theme={theme}/>
            </Grid>
        </Grid>
    </div>
    )
}

export default WhatsUpNew
