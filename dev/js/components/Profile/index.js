/**
 * Created by increment on 24.08.16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions/profilActions'

class Profil extends Component {
	render(){
		return(
			<div>
				<h3>Profil</h3>
				<p>Name: {this.props.profilReducer.name}</p>
				<p>Last name: {this.props.profilReducer.lname}</p>
				<p>Age: {this.props.profilReducer.age}</p>
				<a className="btn"
				   onClick={this.changeINC.bind(this)}>
					INC
				</a>
			</div>
		)
	}

	changeINC(){
		this.props.actions.changeProfilName('Fucker')
	}
}

export default connect(
	({profilReducer}) => {
		return {profilReducer}
	},
	dispatch => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}
)(Profil)