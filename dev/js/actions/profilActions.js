/**
 * Created by increment on 24.08.16.
 */
import {CHANGE_NAME} from '../constants/profilConst'

export function changeProfilName(name){
	return (dispatch) => {
		dispatch({
			type: CHANGE_NAME,
			payload: name
		})
	}
}