import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlaceData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
	const [places, setPlaces] = useState([]);

	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState(null);
	useEffect(() => {
		getPlaceData().then((data) => {
			console.log(data);

			setPlaces(data);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ with: '100%' }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={4}>
					<Map
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
