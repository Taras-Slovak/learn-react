import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Link, useParams } from 'react-router-dom';
import { Repos } from '../components/Repos';

export const Profile = ({ match }) => {
	const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

	const { name: urlName } = useParams(match);

	console.log();

	useEffect(() => {
		getUser(urlName);
		getRepos(urlName);
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <p className='text-center'>Loading...</p>;
	}

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists
	} = user;

	console.log(html_url);

	return (
		<>
			<Link to='/' className='btn btn-link'>
				To main
			</Link>

			<div className='card mb-4'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-sm-3 text-center'>
							<img src={avatar_url} alt={name} style={{ width: '150px' }} />
							<h1>{name}</h1>
							{location && <p>Location: {location}</p>}
						</div>
						<div className='col'>
							{bio && (
								<>
									<h3>BIO</h3>
									<p>{bio}</p>
								</>
							)}
							<a
								href={html_url}
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-dark'
							>
								Open profile
							</a>
							<ul>
								{login && (
									<li>
										<strong>Username: </strong> {login}
									</li>
								)}

								{company && (
									<li>
										<strong>Company: </strong> {company}
									</li>
								)}

								{blog && (
									<li>
										<strong>Website: </strong> {blog}
									</li>
								)}
							</ul>

							<div className='badge bg-primary m-2'>Followers: {followers}</div>
							<div className='badge bg-success m-2'>Following: {following}</div>
							<div className='badge bg-info m-2'>
								Repositories: {public_repos}
							</div>
							<div className='badge bg-dark m-2'>Gists: {public_gists}</div>
						</div>
					</div>
				</div>
			</div>

			<Repos repos={repos} />
		</>
	);
};
