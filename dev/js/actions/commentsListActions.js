/**
 * Created by user on 25.08.2016.
 */
import {COMENT_ADD_NEW,COMENT_REMOVE,COMENTS_GET_ALL,COMENT_ERROR} from '../constants/commentsListConst'

export function commentsGetAll() {
	return (dispatch) => {
		fetch('/coments/get')
			.then((res)=>res.json())
			.then((data)=>{
				if(!data.err){
					dispatch({
						type: COMENTS_GET_ALL,
						payload: data
					})
				}else{
					dispatch({
						type: COMENT_ERROR,
						payload: data
					})
				}
			})
			.catch((err)=>{
				dispatch({
					type: COMENT_ERROR,
					payload: err
				})
			});
	}
}
export function commentsAddNew(comentText) {
	return (dispatch) => {
		fetch('/coments/add',{
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({text: comentText})
		})
			.then((res)=>res.json())
			.then((data)=>{
				if(!data.err){
					dispatch({
						type: COMENT_ADD_NEW,
						payload: data
					})
				}else{
					dispatch({
						type: COMENT_ERROR,
						payload: data
					})
				}
			})
			.catch((err)=>{
				dispatch({
					type: COMENT_ERROR,
					payload: err
				})
			});
	}
}
export function removeComent(id) {
	return (dispatch) => {
		fetch('/coments/remove',{
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id: id})
		})
			.then((res)=>res.json())
			.then((data)=>{
				if(!!data.ok){
					dispatch({
						type: COMENT_REMOVE,
						payload: id
					})
				}else{
					dispatch({
						type: COMENT_ERROR,
						payload: data
					})
				}
			})
			.catch((err)=>{
				dispatch({
					type: COMENT_ERROR,
					payload: err
				})
			});
	}
}