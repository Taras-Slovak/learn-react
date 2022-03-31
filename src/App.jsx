// import React, { Component } from 'react';
// import Layout from './hoc/Layout/Layout';
// import Quiz from './containers/Quiz/Quiz';
// import QuizCreator from './containers/QuizCreator/QuizCreator';
// import Auth from './containers/Auth/Auth';
// import QuizList from './containers/QuizList/QuizList';
// import { Route, Routes } from 'react-router-dom';

// class App extends Component {
// 	render() {
// 		return (
// 			<Layout>
// 				<Routes>
// 					<Route path='/' element={<QuizList />} />
// 					<Route path='auth' element={<Auth />} />
// 					<Route path='quiz-creator' element={<QuizCreator />} />
// 					<Route path='quiz/:id' element={<Quiz />} />
// 				</Routes>
// 			</Layout>
// 		);
// 	}
// }

// export default App;

import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { autoLogin } from './store/actions/auth';

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();

		return <Component history={history} {...props} />;
	};

	return Wrapper;
};

class App extends Component {
	componentDidMount() {
		this.props.autoLogin();
	}

	render() {
		let routes = (
			<Routes>
				<Route path='auth' element={Auth} />
				<Route path='quiz/:id' element={Quiz} />
				<Route path='/' element={QuizList} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		);

		if (this.props.isAuthenticated) {
			routes = (
				<Routes>
					<Route path='quiz-creator' element={QuizCreator} />
					<Route path='quiz/:id' element={Quiz} />
					<Route path='logout' element={Logout} />
					<Route path='/' element={QuizList} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			);
		}

		return <Layout>{routes}</Layout>;
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token
	};
}

function mapDispatchToProps(dispatch) {
	return {
		autoLogin: () => dispatch(autoLogin())
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
