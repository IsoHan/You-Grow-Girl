import React, { useEffect } from 'react';
import axiosInstance from './axiosFetch';
import { useHistory } from 'react-router-dom';

export default function Logout({ handleLogout }) {
	const history = useHistory();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/logout');
		handleLogout();
	});

	return <h2>You have been successfully logged out!</h2>;
}
