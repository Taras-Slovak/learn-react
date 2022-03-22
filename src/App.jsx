import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Layout>
				<Routes>
					<Route path='/' element={<QuizList />} />
					<Route path='auth' element={<Auth />} />
					<Route path='quiz-creator' element={<QuizCreator />} />
					<Route path='quiz/:id' element={<Quiz />} />
				</Routes>
			</Layout>
		);
	}
}

export default App;