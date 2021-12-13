import React from 'react'
import {TextField} from '@material-ui/core'

function Input(props) {
    const {name, label, value, OnChange,error=null,outline, ...other} = props

    return (
       <TextField
           name  = {name}
           label = {label}
           value = {value}
           onChange = {OnChange}
           variant = "outlined"
           {...(error && {error:true,helperText:error})}
           {...other}
       />
    )
}

export default Input
