import React from 'react'
import {FormControl, FormControlLabel,InputLabel,MenuItem,Select as MuiSelect} from '@material-ui/core'



function Select(props) {
    const {label,name, value,onChange, disArray} = props
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect style={{width:150}}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
            {
                disArray.map(
                        item =>(<MenuItem key={Object.values(item)[0]} value={Object.values(item)[0]}>{Object.values(item)[1]}</MenuItem>)
                )
                   
            }
            {/* {
                Months.map(
                        month =>(<MenuItem key={month.id} value={month.id}>{month.mnth}</MenuItem>)
                )
                   
            } */}
            </MuiSelect>

        </FormControl>
    )
}

export default Select
