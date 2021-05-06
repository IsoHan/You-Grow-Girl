import React, { useEffect } from 'react';
import axiosInstance from './axiosFetch';
import { useHistory } from 'react-router-dom';
import plants from '../images/threeplants.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

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

	return (
		<>
			<Container>
				<Col>
					<div style={{ height: '350px', padding: '100px' }}>
						<h2
							className='page-title text-center'
							style={{
								textAlign: 'center',
							}}
						>
							You have been successfully logged out!
						</h2>
					</div>
				</Col>
			</Container>
			<img src={plants} alt={''} className='threeplants' />
		</>
	);
}
