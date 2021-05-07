import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import plants from '../images/threeplants.png';
import axiosInstance from './axiosFetch';
import validate from './validateRegister';
import { store } from 'react-notifications-component';

const Register = (props) => {
	const history = useHistory();
	const [details, setDetails] = useState({
		username: '',
		email: '',
		password: '',
		password1: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(details));
		setIsSubmitting(true);
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			axiosInstance
				.post('/register', {
					username: details.username,
					email: details.email,
					password: details.password,
					// Second password field omitted from POST request - ONLY for front-end verification
					// Refer to validateRegister.jsx
				})
				.then((res) => {
					history.push('/signin/');
					console.log(res);
					console.log(res.data);
				});

			store.addNotification({
				title: 'Registration Successful',
				message: 'You have been successfully registered! You may now log in.',
				type: 'success',
				insert: 'top',
				container: 'top-right',
				animationIn: ['animate__animated', 'animate__fadeIn'],
				animationOut: ['animate__animated', 'animate__fadeOut'],
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		}
	}, [errors]);

	return (
		<div className='font-link'>
			<form onSubmit={handleSubmit}>
				<div className='form-inner'>
					<h2 className='page-title'>
						<b>Register</b>
					</h2>
					<div className='form-group'>
						<label htmlFor='username'>Create Username:</label>
						<input
							type='text'
							username='username'
							id='username'
							placeholder='Enter your username'
							onChange={(e) =>
								setDetails({ ...details, username: e.target.value })
							}
							value={details.username}
						/>
						{errors.username && <p>{errors.username}</p>}
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email:</label>
						<input
							type='text'
							email='email'
							id='email'
							placeholder='Enter your email'
							onChange={(e) =>
								setDetails({ ...details, email: e.target.value })
							}
							value={details.email}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Create Password: </label>
						<input
							type='password'
							password='password'
							id='password'
							placeholder='Enter your password'
							onChange={(e) =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Confirm Password: </label>
						<input
							type='password'
							password='password1'
							id='password1'
							placeholder='Confirm password here'
							onChange={(e) =>
								setDetails({ ...details, password1: e.target.value })
							}
							value={details.password1}
						/>
						{errors.password1 && <p>{errors.password1}</p>}
					</div>
				</div>
				<input type='submit' value='Sign Up Now!' />
				<div>
					<Link
						to='/signin'
						className='link'
						style={{ textDecoration: 'none' }}
					>
						Click here to log in
					</Link>
				</div>
			</form>
			<img src={plants} alt={'!'} className='threeplants' />
		</div>
	);
};

export default Register;
