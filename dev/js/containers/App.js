/**
 * Created by increment on 23.08.16.
 */
import React, {Component} from 'react'
import RegForm from '../components/RegForm'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = this.props;
	}
	render(){
		return(
			<div>
				<RegForm />
			</div>
		)
	}
}