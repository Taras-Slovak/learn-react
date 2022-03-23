import React, { Component } from 'react';
import classes from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends Component {
	sibmitHandler = (event) => {
		event.preventDefault();
	};

	addQuestionHandler = () => {};

	createQuizHandler = () => {};

	render() {
		return (
			<div className={classes.QuizCreator}>
				<div>
					<h1>Test creation</h1>

					<form onSubmit={this.submitHandler}>
						<input type='text' />
						<hr />
						<input type='text' />
						<input type='text' />
						<input type='text' />
						<input type='text' />

						<select></select>

						<Button type='primary' onClick={this.addQuestionHandler}>
							Add a question
						</Button>

						<Button type='success' onClick={this.createQuizHandler}>
							Create test
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
