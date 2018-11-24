import React from 'react';
import "./Nav.css";
const Navigations = (props) => {
	
	if(props.router === '') {
		
		var active = "white";
		
	}else if (props.router === 'Contact') {
		
		 active = "";
		var active2 ="white";
		
	}else if (props.router === 'About') {
		
		active = "";
		active2 ="";
		var active3 = "white";
	}else if (props.router === 'Portfolio') {
			  
		active = "";
		active2 ="";
		active3 = "";
		var active4 = "white";
			  
	 }
		
	
	return (
	<div className="mt3">
		<div className="navContainer">	
		<div onClick={()=>props.name('')} className ='cards pointer grow' style ={{color:active}}>{"home"}</div>
		<div onClick={()=>props.name("Contact")} className ='cards pointer grow' style ={{color:active2}}>{"contact"}</div>
		<div onClick={()=>props.name("About")} className ='cards pointer grow' style ={{color:active3}}>{"about"}</div>
		<div onClick={()=>props.name("Portfolio")} className ='cards pointer grow' style ={{color:active4}}>{"portfolio"}</div>
		</div>	
		</div>
	)



}


export default Navigations;