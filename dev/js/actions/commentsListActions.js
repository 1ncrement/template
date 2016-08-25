/**
 * Created by user on 25.08.2016.
 */
import {ADD_NEW_COMMENT,REMOVE_COMMENT} from '../constants/commentsListConst'

export function commentsList(coment) {
	return (dispatch) => {
		dispatch({
			type: ADD_NEW_COMMENT,
			payload: coment
		})
	}
}
export function removeComent(id) {
	return (dispatch) => {
		dispatch({
			type: REMOVE_COMMENT,
			payload: id
		})
	}
}