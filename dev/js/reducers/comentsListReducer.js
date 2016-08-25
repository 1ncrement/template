/**
 * Created by user on 25.08.2016.
 */
import {ADD_NEW_COMMENT,REMOVE_COMMENT} from '../constants/commentsListConst'
import moment from 'moment'

const initialState = {
	coments: [
		{id:0, text: 'first comment', date: moment()},
		{id:1, text: 'second comment', date: moment()},
		{id:2, text: 'third comment', date: moment()},
		{id:3, text: 'four comment', date: moment()}
	]
};

export default function (state = initialState, action) {
	switch(action.type){
		case ADD_NEW_COMMENT:
			return {
				...state,
				coments: [
					...state.coments,
					{id: state.coments[state.coments.length-1].id + 1, text: action.payload, date: moment()}
				]
			};
		case REMOVE_COMMENT:
			return {
				...state,
				coments: state.coments.filter(coment => coment.id != action.payload)
			};
		default:
			return state;
	}
}