import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends Component {
	updateCounter(value) {
		// this.setState({
		// 	counter: this.state.counter + value
		// });
	}

	render() {
		return (
			<div className={'App'}>
				<h1>
					Counter <strong>{this.state.counter}</strong>
				</h1>

				<hr />

				<div className='Actions'>
					<button onClick={() => this.updateCounter(1)}>Add 1</button>
					<button onClick={() => this.updateCounter(-1)}>Subtract 1</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

export default connect(mapStateToProps)(App);
