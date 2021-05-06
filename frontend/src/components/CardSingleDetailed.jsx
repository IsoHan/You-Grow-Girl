import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
// import image from '../images/plants/zebra_plant.png';
import { useImage } from 'react-image';
import CardColumns from 'react-bootstrap/CardColumns';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	FaWater,
	FaCloudSun,
	FaLeaf,
	FaFlask,
	FaDog,
	FaCat,
} from 'react-icons/fa';
import { useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axiosInstance from './axiosFetch';

const CardSingleDetailed = ({
	id,
	title,
	description,
	image,
	sunlight,
	moisture,
	bloom_period,
	ph_soil,
	toxic_to_dogs,
	toxic_to_cats,
	plant_habit,
	loggedIn,
}) => {
	var plantURL = `/plantinfo/${id}`;

	const AddToGarden = async (id) => {
		var data = { plant: `${id}` };
		axiosInstance.post('gardens/gardenplants/', data);
	};

	const handleAddToGarden = () => {
		store.addNotification({
			title: 'Planted!',
			message: `${title} has been planted in Your Garden!`,
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
	};

	const handleRequireSignin = () => {
		store.addNotification({
			title: 'Sign In',
			message: `You must be signed in to add a ${title} to Your Garden.`,
			type: 'info',
			insert: 'top',
			container: 'top-right',
			animationIn: ['animate__animated', 'animate__fadeIn'],
			animationOut: ['animate__animated', 'animate__fadeOut'],
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
	};

	return (
		<Card
			className='text-center'
			style={{
				padding: '30px',
				border: '1px solid #fececf',
				borderRadius: '30px',
				marginTop: '30px',
			}}
		>
			<Row>
				<Col lg={6}>
					<Card.Img variant='top' src={image} />
				</Col>
				<Col lg={6}>
					<Card.Body>
						<Card.Title
							id='plant-title'
							style={{ fontSize: '40px', marginTop: '60px' }}
						>
							{title}
						</Card.Title>
						<div
							style={{
								marginBottom: '20px',
								marginTop: '-10px',
								fontSize: '14px',
							}}
						>
							{plant_habit}
						</div>
						<Card.Text>{description}</Card.Text>
						<hr />
						<Card.Text style={{ marginBottom: '30px' }}>
							<FaCloudSun style={{ color: 'pink' }} /> Light: {sunlight}
							<br />
							<FaWater style={{ color: 'pink' }} /> Moisture: {moisture}
							<br />
							<FaLeaf style={{ color: 'pink' }} /> Bloom period: {bloom_period}
							<br />
							<FaFlask style={{ color: 'pink' }} /> Soil pH: {ph_soil}
							<br />
							<FaDog style={{ color: 'pink' }} /> Toxic to Dogs: {toxic_to_dogs}
							<br />
							<FaCat style={{ color: 'pink' }} /> Toxic to Cats: {toxic_to_cats}
						</Card.Text>
						{loggedIn ? (
							<Button
								onClick={() => {
									AddToGarden(id);
									handleAddToGarden();
								}}
								style={{
									backgroundColor: '#1cab7c',
									border: 'none',
								}}
							>
								Add to Garden
							</Button>
						) : (
							<Button
								onClick={handleRequireSignin}
								style={{
									backgroundColor: '#1cab7c',
									border: 'none',
								}}
							>
								Add to Garden
							</Button>
						)}
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};

CardSingleDetailed.defaultProps = {
	title: 'Default Title',
	description:
		'A tropical plant originally from Brazil. Typically grown indoors, its lauded for its unique dark leaves that are striped with white veins, as well as its colorful flowers.',
	imageName: 'zebra_plant.png',
};

CardSingleDetailed.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageName: PropTypes.string,
};

export default CardSingleDetailed;
