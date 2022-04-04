import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ user }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<img src={user.avatar_url} alt={user.login} className='card-img-top' />
				<h5 className='card-title'>{user.login}</h5>
				<Link to={`profile/${'react'}`} className='btn btn-primary'>
					Open
				</Link>
			</div>
		</div>
	);
};
