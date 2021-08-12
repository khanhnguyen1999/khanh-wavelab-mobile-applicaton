import React from 'react'
import ReactJson from 'react-json-view'

const DataJson = ({result}:any)=>{
    return (
        <ReactJson theme="twilight" src={result} />
    )
}

export default DataJson