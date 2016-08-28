/**
 * Created by Increment on 28.08.2016.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Nav extends Component {
	render() {
		return (
			<div className="row">
				<ul className="nav">
					<li><Link to="/profil">Profil</Link></li>
					<li><Link to="/coments">Coments</Link></li>
				</ul>
			</div>
		)
	}
}