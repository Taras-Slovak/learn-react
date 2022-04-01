import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='container pt-4'>
				<Routes>
					<Route path={'/'} element={<Home />}></Route>
					<Route path={'about'} element={<About />}></Route>
					<Route path={'profile/:name'} element={<Profile />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
