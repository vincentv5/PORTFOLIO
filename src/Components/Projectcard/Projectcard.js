import React from 'react';
import "./projectcard.css";

const Projectcard = (props) => {
	  
	
	
	return (
		
			<div className = "center pb3 shadow-6 grow br3 ba b--black bg-black mb5 pointer" style={{ width:250, height:"auto" }}>
			<a href='#' style={{ textDecoration:"none", }}>
			<img alt= '' src ={props.name} style ={{width:250, height:'auto'}}/>
			<h3 className='font tc'>{props.value}</h3>
			</a>
			</div>
			
	)



}


export default Projectcard;