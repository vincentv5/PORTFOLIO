import React from 'react';
import Projectcard from "../Projectcard/Projectcard";
import imags1 from "./imags/face-rec.png";
import imags2 from "./imags/php.png";
import imags3 from "./imags/quote.png";
import imags4 from "./imags/robo-f.png";
import imags5 from "./imags/search.png";
import imags6 from "./imags/websites.png";
import "./portfolio.css";

const Portfolio = () => {
	  return (
	
	<div className="mt3">
	<h2 className ="tc font mb4">Click on the project name to view the saurce code</h2>
	<div className="overflow center">
		<div className="styling mt2">
		
			<Projectcard name={imags1} value ={"Face recognition app"}/>
			<Projectcard name={imags2} value ={"CMS project on php"}/>
			<Projectcard name={imags3} value ={"QUote machine"}/>
			<Projectcard name={imags4} value ={"Robo friends app"}/>
			<Projectcard name={imags5} value ={"Search engin"}/>
			<Projectcard name={imags6} value ={"web design"}/>
			<Projectcard name={imags1} value ={"Face recognition app"}/>
			<Projectcard name={imags2} value ={"CMS project on php"}/>
			<Projectcard name={imags3} value ={"QUote machine"}/>
			<Projectcard name={imags4} value ={"Robo friends app"}/>
			<Projectcard name={imags5} value ={"Search engin"}/>
			<Projectcard name={imags6} value ={"web design"}/>
		</div>
	</div>
</div>
	)
}
export default Portfolio;