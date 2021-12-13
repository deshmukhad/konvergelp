import React, {useContext, useState} from 'react'
import loginContext from './GenContext'
import { Months, Role } from './DataService'
import Controls from './Controls'

function Welcome() {

// const {user, setUser} = useContext(loginContext)
    const[selectMonth, setSelectMonth] = useState()
    const[selectrole, setSelectrole] = useState()

    const handleSelect = () =>{
        
    }

    const handleSelectrole = () =>{
        
    }

    return (
        <div>
           <h2>Hello, Welcome to Konverger AI</h2> 
           <Controls.Select
                label = "Select Month"
                name  = "selectmonth"
                value = {selectMonth}
                onChange = {handleSelect}
                disArray = {Months}
           />

            <Controls.Select
                label = "Select Role"
                name  = "selectrole"
                value = {selectrole}
                onChange = {handleSelectrole}
                disArray = {Role}
           />
           
           {/* {
               Months.map(month =>
                  <h3> {month.id}, {month.mnth} </h3>
               )
           } */}
        </div>
    )
}

export default Welcome
