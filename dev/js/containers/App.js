/**
 * Created by increment on 23.08.16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/profilActions'
import Nav from '../components/Nav'

import Profil from '../components/Profile'
import CommentsList from '../components/CommentsList'

export default class App extends Component {
	render(){
		return(
			<div className="container">
				<Nav />
				<div className="main-body">
					{this.props.children}
				</div>
			</div>
		)
	}
}
