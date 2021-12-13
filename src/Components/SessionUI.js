import React, {useContext} from 'react'
import {Card, CardActionArea, CardContent, CardMedia, CardActions} from '@material-ui/core'
import{Button, Typography, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import { menuContext } from './GenContext'
import ReactPlayer from 'react-player'

const useStyles = makeStyles(theme =>({
    card: {
            width: 500,
            height: 300,
            alignItems: "center",
            padding : theme.spacing(3),
            margin : theme.spacing(3),
            background : "#e6ee9c",
            border : `3px solid #ffc107`
            
    }
})) 

function SessionUI(props) {
    const classes = useStyles()
    const [menuopt, setMenuopt] = useContext(menuContext)
   

    // const buttonClick =() =>{
    //     //alert("Selected Card " + props.sessionid)
    //     sessionStorage.setItem('sessionid',props.sessionid)
    //     sessionStorage.setItem('videolink',props.videolink)
    //     console.log(props.videolink)
    //     setMenuopt(41)
    // }
    
    return (
        <Card className={classes.card}>
            <CardContent>  
                {/* <CardMedia
                    component="img"
                    width="100%"
                    height="140"
                    image={props.videolink}
                    alt={props.title}
                /> */}
                <ReactPlayer  controls width="400px" height="200px" url={props.videolink} sx={{}} />
            
                <Typography variant="h5" component="div">
                   {props.title}
                </Typography>

                <Typography variant="body2">
                    {props.sessiontext}
                </Typography>

            </CardContent>

            {/* <CardActions>
                <Button size="small" onClick={buttonClick}>Video Link</Button>
            </CardActions> */}
        </Card>
    )
}

export default SessionUI
