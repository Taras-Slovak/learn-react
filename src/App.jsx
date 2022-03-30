import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Counter from './Counter';
import { add, sub, addNumber } from './redux/actions/actions';
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

				<div className='Actions'>
					<button onClick={() => this.props.onAddNumber(15)}>&#43; 15</button>
					<button onClick={() => this.props.onAddNumber(-17)}>&#45; -17</button>
				</div>

				<Counter />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter1.counter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add()),
		onSub: () => dispatch(sub()),
		onAddNumber: (number) => dispatch(addNumber(number))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
