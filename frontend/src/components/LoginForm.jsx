import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import plants from '../images/threeplants.png';
import { useHistory } from 'react-router-dom';
import axiosInstance from './axiosFetch';

function SignIn({ username, password, error, handleLogin }) {
	const history = useHistory();
	const [details, setDetails] = useState({
		username: '',
		password: '',
	});

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(details);

		axiosInstance
			.post(`token/`, {
				username: details.username,
				password: details.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/');
				//console.log(res);
				//console.log(res.data);
				localStorage.setItem('loggedin_username', details.username);
				handleLogin(details.username);
			});
	};

	return (
		<div className='font-link'>
			<form onSubmit={submitHandler}>
				<div className='form-inner'>
					<h2 className='page-title'>
						<b>Sign In</b>
					</h2>
					{error !== '' ? <div className='error'>{error}</div> : ''}
					<div className='form-group'>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							username='username'
							id='username'
							onChange={(e) =>
								setDetails({ ...details, username: e.target.value })
							}
							value={details.username}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							username='password'
							id='password'
							onChange={(e) =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
					</div>
				</div>
				<input type='submit' value='Sign In Now!' />
				<div>
					<Link
						to='/register'
						className='link'
						style={{ textDecoration: 'none' }}
					>
						Click here to register
					</Link>
				</div>
			</form>
			<img src={plants} alt={''} className='threeplants' />
		</div>
	);
}

export default SignIn;
