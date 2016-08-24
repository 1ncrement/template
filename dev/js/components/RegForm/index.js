/**
 * Created by increment on 23.08.16.
 */
import React, {Component} from 'react'

export default class RegForm extends Component{
	constructor(props){
		super(props);
		this.state = this.props;
	}
	render(){
		return(
			<form action="" className="registration-form">
				<input autoFocus type="text" name="login" placeholder="Login"/>
				<input type="email" name="email" placeholder="Email"/>
				<input type="password" name="password" placeholder="Password"/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}