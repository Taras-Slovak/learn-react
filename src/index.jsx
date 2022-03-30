import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import reduxThunk from 'redux-thunk';

const loggerMiddleware = (store) => (next) => (action) => {
	const result = next(action);
	console.log('Middleware', store.getState());
	return result;
};

const store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware, reduxThunk)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
