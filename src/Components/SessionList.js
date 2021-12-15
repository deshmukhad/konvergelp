import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
//import {Card, CardActionArea, CardContent, CardMedia, CardActions} from '@material-ui/core'
//import{Button, Typography, Box} from '@material-ui/core'
import SessionUI from './SessionUI';
//import { SesList } from './DataService'
import { menuContext } from './GenContext';
import axios from 'axios';

const useStyles = makeStyles({
	root: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row'
	},
	btn: {
		marginTop:'20px',
		marginBottom: '20px',
	}
});

function SessionList(props) {
	const classes = useStyles();
	const [ sessionList, setSessionList ] = useState([]);
	const [ menuopt, setMenuopt ] = useContext(menuContext);
	//const [courseid, setCourseid] = useContext(courseContext)

	useEffect(() => {
		async function getSession() {
			console.log(props.courseid);
			try {
				const response = await axios.get(`http://192.168.0.105:8081/getsessions/${props.courseid}`);
				console.log(response.data);
				setSessionList(response.data);
			} catch (e) {
				alert('Unable to get the Sessions');
			}
		}
		getSession();
	}, []);

	const goback = () => {
		setMenuopt(3);
	};
	return (
		<Grid container alignItems="center" className={classes.root}>
			{sessionList.map((sesList) => (
				<Grid item xs={4} align="center">
					<SessionUI
						title={sesList.sessiontitle}
						sessiontext={sesList.sessiontext}
						sessionid={sesList.sessionid}
						videolink={sesList.sessionvideo}
					/>
				</Grid>
			))}
			<Button size="Small" variant="contained" color="secondary" onClick={goback} className={classes.btn}>
				GO BACK
			</Button>
			{/* {
                SesList.map(sessionItem =>(
                    <Grid item xs={4} align="center">
                        <SessionUI title={sessionItem.sesname} imgsrc={sessionItem.cardImg} cardid={sessionItem.sesid}/>
                    </Grid>
                ))
            } */}
		</Grid>
	);
}

export default SessionList;
