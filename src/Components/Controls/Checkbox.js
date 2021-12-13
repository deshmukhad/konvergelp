import React from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core'

function Checkbox(props) {
    const {name, color, checked, onClick, label} = props

    return (
        <FormControl>
           <FormControlLabel
                control = {
                    <MuiCheckbox
                        name = {name}
                        color = {color|| 'primary'}
                        checked = {checked}
                         onClick = {onClick}
                    />
                }
                label = {label}
            />
       </FormControl> 
    )
}

export default Checkbox
