import React from 'react'
import { TextArea } from "carbon-components-react";

type ITextArea = {
    onChange?: (value:string)=>void
}

const Textarea = ({onChange}:ITextArea)=>{

    return (
        <TextArea onChange={onChange} />
    )
}
export default Textarea