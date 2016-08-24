/**
 * Created by increment on 23.08.16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/profilActions'

import Profil from '../components/Profile'

class App extends Component {
	render(){
		return(
			<div>
				<Profil />
			</div>
		)
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
)(App)