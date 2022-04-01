import React from 'react';

export const Search = () => {
	return (
		<div className='row'>
			<div className='col'>
				<input
					type='text'
					className='form-control'
					placeholder='Please enter your username...'
					aria-label='Please enter your username...'
				/>
			</div>
		</div>
	);
};
