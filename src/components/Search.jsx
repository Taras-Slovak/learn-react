import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
	const { show } = useContext(AlertContext);

	const onSubmit = (event) => {
		if (event.key === 'Enter') {
			show('This is alert!');
		}
	};
	return (
		<div className='row'>
			<div className='col'>
				<input
					type='text'
					className='form-control'
					placeholder='Please enter your username...'
					onKeyPress={onSubmit}
				/>
			</div>
		</div>
	);
};
