/**
 * Created by increment on 23.08.16.
 */
import React, {Component} from 'react'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = this.props;
	}
	render(){
		return(
			<div>
				<a className="btn" onClick={this.actionINC.bind(this)}>INC</a>
				{'  '}
				<a className="btn" onClick={this.actionDEC.bind(this)}>DEC</a>
			</div>
		)
	}

	actionINC(e){
		e.preventDefault();
		this.state.store.dispatch({type: "INC", number: 1});
	}
	actionDEC(e){
		e.preventDefault();
		this.state.store.dispatch({type: "DEC", number: 1});
	}
}