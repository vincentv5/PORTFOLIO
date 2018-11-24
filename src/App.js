import React from 'react';
import Navigations from "./Components/Navigations/Navigations";
import Main from "./Components/Main/Main";
import Footer  from "./Components/Footer/Footer";
import Socialicons  from "./Components/Socialicons/Socialicons";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			rout: '',
			name:'',
			email:'',
			message:''
			
			
		}
	}
	
	
	
	onChange = (name) => {
	
		this.setState({rout:name});
		
		
	}
	
	onNameChange = (e) => {
		
		this.setState({
			name:e.target.value
		});
	}
	
	
	onEmailChange = (e) => {
		
		this.setState({
			email:e.target.value
		});
	}
	
	
	onMessageChange = (e) => {
		this.setState({
			message:e.target.value
		});	
		
	}
	
	
	onSubmitChange=(e)=> {
		e.preventDefault();
		
		fetch('https://guarded-tor-60479.herokuapp.com/mail',{
			method:"post",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				message:this.state.message	
		})
		})
		.then(response => console.log(response))
		.catch(err => console.log(err));
		this.setState({
			
			name:'',
			email:'',
			message:''
		});
		
	}
	
	
	
	
	
	
	render() {
		
		
		
		const value = this.state.rout === ''? (
				<div>
				<Main />
				<Socialicons />
				<Footer />
				</div>
				)
				:(this.state.rout === 'About'
				? (
				<div>
				<About />
				
				</div>
				)
				:(this.state.rout === 'Contact'
				? (
				<div>
				<Contact submit={this.onSubmitChange} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange} onMessageChange={this.onMessageChange} name={this.state.name} email={this.state.email} message={this.state.message}/>
				
				</div>
				)
				:(
					this.state.rout ==='Portfolio'
				?(
					<div>
					<Portfolio />
					</div>
					
					):
						(
					
				<div>
				<Main />
				<Socialicons />
				<Footer />
				</div>
					)
				
				)))
		
		

			return (
			<div>
			
				<Navigations name={this.onChange} active={this.state.active} router={this.state.rout}/>
				{ value }
				
			</div>
	
		)
	
	}
}


export default App;