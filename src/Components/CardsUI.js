import React, {useContext} from 'react'
import {Card, CardActionArea, CardContent, CardMedia, CardActions} from '@material-ui/core'
import{Button, Typography, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import { courseContext, menuContext } from './GenContext'


const useStyles = makeStyles(theme =>({
    card: {
            width: 300,
            height: 300,
            alignItems: "center",
            padding : theme.spacing(3),
            margin : theme.spacing(3),
            // background : "#e6ee9c",
            border : `5px groove #10245c`,
    }
})) 

function CardsUI(props) {
    const classes = useStyles()
    const [menuopt, setMenuopt] = useContext(menuContext)
    //const [courseid, setCourseid] = useContext(courseContext)
   

    const buttonClick =() =>{
        alert("Selected Card " + props.cardid)
        sessionStorage.setItem('courseid', props.cardid)
        //setCourseid(props.cardid)
        setMenuopt(31)
    }
    
    return (
        <Card className={classes.card}>
            <CardContent>  
                <CardMedia
                    component="img"
                    width="100%"
                    height="140"
                    margin="auto"
                    image={props.imgsrc}
                    alt={props.title}
                />
            
                <Typography variant="h5" component="div">
                   {props.title}
                </Typography>

                <Typography variant="body2">
                    {props.cardtext} {props.title}
                </Typography>

            </CardContent>
            <hr></hr>
            <CardActions>
                <Button size="Small" onClick={buttonClick}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardsUI
