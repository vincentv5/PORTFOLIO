import React from 'react';
import 	"./contact2.css";
import Socialicons from "../Socialicons/Socialicons";
const Contact = (props) => {
	  
	
	
	return (
		<div>
		<h3 className = 'flex2 font mt4 tc'>Kindly contact me here</h3>
		<div className="mt4 overflow2">
		
			<main className="pa4 black-80 mw6 center mt2 dark-red bg-navy shadow-5 br3 ">
			  <form onSubmit={props.submit} className="measure center mw6">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				
				  
				  <div className="mt3">
					<label className="db fw6 lh-copy f6 font" htmlFor="Name">Name</label>
					<input onChange = {props.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name" value={props.name}/>
				  </div>
				  
				  
				   <div className="mt3">
					<label className="db fw6 lh-copy f6 font" htmlFor="email-address">Email</label>
					<input  onChange = {props.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" value={props.email}/>
				  </div>
				  
				  <div className="mt3">
					<label htmlFor="comment" className="f6 b font db mb2">Message</label>
					<textarea onChange = {props.onMessageChange}  rows="4" cols="50" id="comment" name="comment" className="db border-box hover-bg-black hover-white w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" value={props.message}>
						
					</textarea>
				 </div>
				 
				</fieldset>
				<div class="">
				  <input className="b ph4 pv2 input-reset ba b--black bg-green grow pointer f6 dib br3 font" type="submit" value="Send"/>
				</div>
				
			  </form>
			</main>
			
			
		
			<h3 className = 'flex2 tc font mt4 t-shadow-2'>You can also follow  me on social media</h3>
				<Socialicons />
		</div>
	</div>
	)



}


export default Contact;