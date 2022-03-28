import classes from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

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
	componentDidMount() {
		axios
			.get(
				'https://learn-react-c38e3-default-rtdb.europe-west1.firebasedatabase.app/quiz.json'
			)
			.then((response) => {
				console.log(response);
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
