/**
 * Created by increment on 24.08.16.
 */
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initState) {
	const store = createStore(rootReducer, initState, applyMiddleware(thunk, promise, createLogger()));

	return store;
}