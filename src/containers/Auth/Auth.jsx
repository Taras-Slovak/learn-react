import React, { Component } from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';

export default class Auth extends Component {
	loginHandler = () => {};

	registerHandler = () => {};

	submitHandler = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Authorization</h1>

					<form onSubmit={this.submitHandler} className={classes.AuthForm}>
						<input type='text' />
						<input type='text' />

						<Button type='success' onClick={this.loginHandler}>
							Sign In
						</Button>

						<Button type='primary' onClick={this.registerHandler}>
							Sign up
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
