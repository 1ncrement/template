/**
 * Created by increment on 23.08.16.
 */
import React from 'react'
import {render} from 'react-dom'
import './../scss/index.scss'
import {Provider} from 'react-redux'
import App from './components/App'

render(
	<App />
	,
	document.getElementById('root')
);