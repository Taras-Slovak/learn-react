import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className={'App'}>
				<h1>
					Counter <strong>{this.props.counter}</strong>
				</h1>

				<hr />

				<div className='Actions'>
					<button onClick={this.props.onAdd}>&#43; 1</button>
					<button onClick={this.props.onSub}>&#45; 1</button>
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

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch({ type: 'ADD' }),
		onSub: () => dispatch({ type: 'SUB' })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
