import React from 'react'
import {Button as MuiButton} from '@material-ui/core'
function Button(props) {
    const {text, size, color, onClick, outline, ...other} = props
    return (
        <MuiButton
            variant = {outline || 'contained'}
            size = {size || 'medium'}
            color = {color || 'primary'}
            onClick= {onClick}
            {...other}
            style = {{width:'150px',marginLeft:'10px'}}
        >
        {text}
        </MuiButton>
    )
}

export default Button
