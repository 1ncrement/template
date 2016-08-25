/**
 * Created by user on 25.08.2016.
 */
import {COMENT_ADD_NEW,COMENT_REMOVE,COMENT_ERROR,COMENTS_GET_ALL} from '../constants/commentsListConst'
import moment from 'moment'

const initialState = {
	coments: []
};

export default function (state = initialState, action) {
	switch(action.type){
		case COMENTS_GET_ALL:
			return {
				...state,
				coments: action.payload
			};
		case COMENT_ADD_NEW:
			return {
				...state,
				coments: [...state.coments, action.payload]
			};
		case COMENT_REMOVE:
			return {
				...state,
				coments: state.coments.filter(coment => coment._id != action.payload)
			};
		case COMENT_ERROR:
			return state;
		default:
			return state;
	}
}