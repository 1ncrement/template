/**
 * Created by increment on 24.08.16.
 */
import {CHANGE_NAME} from '../constants/profilConst'

const initialState = {
	name: 'Jeka',
	lname: 'Vakula',
	age: 23
};

export default function (state = initialState, action) {
	switch(action.type){
		case CHANGE_NAME:
			return {...state, name: action.payload};
		default:
			return state;
	}
}