import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { logout } from '../../store/actions/auth';

class Logout extends Component {
	componentDidMount() {
		this.props.logout();
	}

	render() {
		return <Route path='*' element={<Navigate to='/' replace />} />;
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(logout())
	};
}

export default connect(null, mapDispatchToProps)(Logout);
