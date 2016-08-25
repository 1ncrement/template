/**
 * Created by increment on 23.08.16.
 */
import React from 'react'
import {render} from 'react-dom'
import './../scss/index.scss'
import {Provider} from 'react-redux'
import App from './containers/App'

import configureStore from './store/configureStore'

const store = configureStore();

render(
	<Provider store={store} >
		<div>
			<App />
		</div>
	</Provider>
	,
	document.getElementById('root')
);