import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./icons.css";

const Socialicons = () => {
	
	return (
	<div className ="mt5">
		<div className='icons shadow-5 pa2 '>
			<SocialIcon url="http://twitter.com/jaketrent" style={{ height: 70, width: 70 }} className="grow"/>
			<SocialIcon url="http://freecodecamp.com/vincentv5" style={{ height: 70, width: 70 }} className="grow"/>
			<SocialIcon url="http://linkedin.com/vincentv5" style={{ height: 70, width: 70 }} className="grow"/>
			<SocialIcon url="https://www.facebook.com/vincent" style={{ height: 70, width: 70}} className="grow"/>
		</div>
	</div>
	);
}



export default Socialicons;