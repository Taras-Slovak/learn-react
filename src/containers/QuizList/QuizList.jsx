import classes from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

export default class QuizList extends Component {
	renderQuizes() {
		return [1, 2, 3].map((quiz, index) => {
			return (
				<li key={index}>
					<NavLink to={'/quiz/' + quiz}>Test {quiz}</NavLink>
				</li>
			);
		});
	}

	render() {
		return (
			<div className={classes.QuizList}>
				<div>
					<h1>List of tests</h1>

					<ul>{this.renderQuizes()}</ul>
				</div>
			</div>
		);
	}
}
