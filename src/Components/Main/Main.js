import React from 'react';
import Tilt from 'react-tilt'
import Images from "./Images/short.jpg";
import "./main.css";

const Main = () => {
	
	return (
	
		<div className='mainContainer'>
		
		<Tilt className="Tilt" options={{ max : 50 }} style={{ height: 220, width: 220}} >
			 <div className="Tilt-inner"><img alt ="mypics" src = {Images} style={{width:200, height:"auto",borderRadius:100}}/></div>
			 
		</Tilt>
		
			<div className = 'tc ml5 mt5'>
			<h1 className='myName'>Anajuba Vincent</h1>
			<h3 className="myTitle">Software developer</h3>
			</div>
			
		</div>
	)



}


export default Main;