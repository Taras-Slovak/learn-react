import React from 'react';
import { Link } from 'react-router-dom';

export const Card = () => {
	return (
		<div className='card'>
			<div className='card-body'>
				<img src='' className='card-img-top' alt='' />
				<h5 className='card-title'>React JS</h5>
				<Link to={`profile/${'react'}`} className='btn btn-primary'>
					Open
				</Link>
			</div>
		</div>
	);
};
