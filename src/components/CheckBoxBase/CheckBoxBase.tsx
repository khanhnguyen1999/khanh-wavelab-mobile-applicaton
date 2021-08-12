import React from 'react'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

type ICheckBox = {
    data?:any,
    service?:string,
    handleChange?: (value:any)=>void
}
const CheckBoxBase = ({data,handleChange,service}:ICheckBox)=>{
    return (
        <>
            {
                data.map((item:any)=>(
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={item.checked}
                            value={item.value}
                            onChange={handleChange}
                            name={`${service}`}
                        />
                        }
                        label={`${item.value}`}
                    />
                ))
            }
        </>
    )
}
export default CheckBoxBase