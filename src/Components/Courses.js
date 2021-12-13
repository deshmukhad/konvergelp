import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { Button, Typography, Box } from '@material-ui/core';
import CardsUI from './CardsUI';
//import { CardList } from './DataService'
import axios from 'axios';
/* import imgReact from '../Images/ReactImage.png'
import imgNode from '../Images/NodeImage.png'
import imgAI from '../Images/AIImage.png'
import imgML from '../Images/MachineLImage.png'
import imgDS from '../Images/DataScienceImage.png' 

 */

const useStyles = makeStyles({
	root: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row'
	}
});

function Courses() {
	const classes = useStyles();
	const [ cardList, setCardList ] = useState([]);

	useEffect(() => {
		async function getCourse() {
			try {
				const response = await axios.get(`http://192.168.0.105:8081/getcourses`);
				//console.log("hi from useEffect")
				//console.log(response.data)
				setCardList(response.data);
			} catch (e) {
				alert('Unable to get the Courses');
			}
		}
		getCourse();
	}, []);

	return (
		<Grid container alignItems="center" className={classes.root}>
			{cardList.map((carditem) => (
				<Grid item xs={4} align="center">
					<CardsUI
						title={carditem.coursetitle}
						cardtext={carditem.coursetext}
						imgsrc={carditem.imagename}
						cardid={carditem.courseid}
					/>
				</Grid>
			))}
			{/* {
                CardList.map(carditem =>(
                    <Grid item xs={4} align="center">
                        <CardsUI title={carditem.cardTitle} imgsrc={carditem.cardImg} cardid={carditem.cardId}/>
                    </Grid>
                ))
            } */}

			{/* <Grid item xs={4} align="center">
                <CardsUI title="React" imgsrc={imgReact}/>
            </Grid>
            <Grid item xs={4} align="center">
                <CardsUI title="Node" imgsrc={imgNode}/>
            </Grid>
            <Grid item xs={4} align="center">
                <CardsUI title="AI" imgsrc={imgAI}/>
            </Grid>
            <Grid item xs={4} align="center">
                <CardsUI title="Machine Learning" imgsrc={imgML}/>
            </Grid>
            <Grid item xs={4} align="center">
                <CardsUI title="Data Science" imgsrc={imgDS}/>
            </Grid> */}
		</Grid>
	);
}

export default Courses;
