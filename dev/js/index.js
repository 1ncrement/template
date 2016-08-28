/**
 * Created by increment on 23.08.16.
 */
import React from 'react'
import {render} from 'react-dom'
import './../scss/index.scss'
import {Provider} from 'react-redux'
import App from './containers/App'
import Home from './components/Home'
import Profil from './components/Profile'
import CommentsList from './components/CommentsList'
import {Router, Route, browserHistory} from 'react-router'

import configureStore from './store/configureStore'

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Home}/>
				<Route path="/profil" component={Profil}/>
				<Route path="/coments" component={CommentsList}/>
			</Route>
		</Router>
	</Provider>
	,
	document.getElementById('root')
);