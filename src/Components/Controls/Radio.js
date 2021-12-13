import React from 'react'
import { FormControl,FormLabel, FormControlLabel, RadioGroup as MuiRadioGroup, Radio as MuiRadio } from '@material-ui/core'

export const Radio = (props) => {
    const {label,name, value,onClick,radioGrpLbl, radioGrpNme, defaultV} = props
    return (
        <FormControl>
            <MuiRadioGroup row 
                aria-label={radioGrpLbl} defaultValue={defaultV} name={radioGrpNme}>
                <FormControlLabel
                    control = {<MuiRadio />}
                    label={label}
                    value = {value}
                    onClick={onClick}
                />
            </ MuiRadioGroup>
        </FormControl>
    )
}
