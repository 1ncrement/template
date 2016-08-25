/**
 * Created by increment on 24.08.16.
 */
import {combineReducers} from 'redux'
import profilReducer from './profilReducer'
import comentsListReducer from './comentsListReducer'

export default combineReducers({
	profilReducer,
	comentsListReducer
})