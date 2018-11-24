import React from 'react';
import './footer.css';

const Footer = () => {
	  
	let date =new Date();
	let now= date.getFullYear();
	
	return (
		<div className='footerContainer'>
			<div className = "flex ">
				<h3>Copywrite <span>{now}</span></h3>
			</div>
		</div>
	)



}


export default Footer;