import * as React from 'react';
import banner from "./pic/linkedin_banner_image_1.png"
import MediaCard from "./CardComponent/CardComponent"
import cheeseCakeImg from './pic/WechatIMG12441.jpeg'
import bluebarryCheeseCakeImg from './pic/WechatIMG12438.jpeg'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function App() {

	const cakes = [
		{
			image: cheeseCakeImg,
			title: "",
			name: "New York Cheese Cake",
			ingredients: "Butter, Cheese"
		},
		{
			image: bluebarryCheeseCakeImg,
			title: "",
			name: "Bluebarry Cheese Cake",
			ingredients: "Bluebarry, Cheese, Butter"
		},
	]


	return <div className='app'>
		<section className="title">
			<img style={{marginTop: "1.5rem"}} src={banner} alt="Girl in a jacket" width="200" />
		</section>
		<section style={{overflow: "auto", height: "810px"}}>
			<div className="body">
				{
					cakes.map(cake => <div key={cake.name} style={{margin: "1.5rem 3rem"}}>
						<MediaCard cakeData={cake}/>
					</div>)
				}
			</div>
			<div>
				<Box sx={{ fontFamily: 'Monospace', fontStyle: 'italic', color: 'white', margin: "1rem 3rem 0.625rem 3rem" }}>
					<Typography variant="h6" component="div">
						How to order:
					</Typography>
				</Box>
				<Box sx={{ fontFamily: 'Monospace', fontStyle: 'italic', color: 'white', margin: "0 3rem 1rem 3rem", fontSize: "16px" }}>
					<Typography component="div">
						Zelle: 646-641-1017
					</Typography>
					<Typography component="div">
						Please input your name and kind in the message
					</Typography>
				</Box>
			</div>
		</section>
	</div>
}

export default App;
