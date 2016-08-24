/**
 * Created by increment on 23.08.16.
 */
import React from 'react'
import {render} from 'react-dom'
import './../scss/index.scss'
import {Provider} from 'react-redux'
import App from './containers/App'

import {combineReducers, createStore} from 'redux'

const reducer = (state={}, action)=>{
	switch(action.type){
		case 'INC':
			return state+action.payload;
		case 'DEC':
			return state-action.payload;
		default:
			return state;
	}
};

const store = createStore(reducer, 0);

store.subscribe(()=>{
	console.log('store changed', store.getState());
});

render(
	<App store={store} />
	,
	document.getElementById('root')
);