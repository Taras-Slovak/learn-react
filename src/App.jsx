import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';

function App() {
	return (
		<AlertState>
			<BrowserRouter>
				<Navbar />
				<div className='container pt-4'>
					<Alert alert={{ text: 'Test alert' }} />
					<Routes>
						<Route path={'/'} element={<Home />}></Route>
						<Route path={'about'} element={<About />}></Route>
						<Route path={'profile/:name'} element={<Profile />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</AlertState>
	);
}

export default App;
