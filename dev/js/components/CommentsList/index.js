/**
 * Created by user on 25.08.2016.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions/commentsListActions'
import moment from 'moment'

class CommentsList extends Component {
	render() {
		return (
			<div className="comments">
				<input autoFocus type="text" ref="coment" placeholder="You're coment." onKeyDown={this.submitComent.bind(this)} />
				<button onClick={this.addComent.bind(this)}>Отправить</button>
				<p>
					Coments:
				</p>
				<ul>
					{
						this.props.comentsListReducer.coments.map((el)=> {
							return (
								<li key={`${el._id}`}>
									<span className="coment-text">{el.text}</span>
									<span className="coment-date">{moment(el.date).startOf('min').fromNow()} </span>
									<a className="coment-remove" data-elId={el._id} onClick={this.removeComent.bind(this)}>x</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}

	componentWillMount(){
		this.props.actions.commentsGetAll();
	}

	addComent(e) {
		e.preventDefault();
		this.doAction(this.refs.coment.value);
	}

	submitComent(e){
		if(e.key == 'Enter'){
			this.doAction(this.refs.coment.value);
		}
	}

	doAction(text){
		this.props.actions.commentsAddNew(text);
		this.refs.coment.value = '';
	}

	removeComent(e){
		this.props.actions.removeComent(e.target.getAttribute('data-elId'));
	}
}

export default connect(
	({comentsListReducer})=> {
		return {comentsListReducer}
	},
	(dispatch) => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}
)(CommentsList)
