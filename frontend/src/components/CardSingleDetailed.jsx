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

const CardSingleDetailed = ({ id, title, description, image }) => {
	var plantURL = `/plantinfo/${id}`;

	const AddToGarden = async (id) => {
		const token = 'f8e90f2caa0179b2f05ca8e7a628e0e83b70af3c';
		var data = { plant: `${id}` };
		const res = await axios.post(
			`http://127.0.0.1:8000/gardens/api/gardenplants/`,
			data,
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		);
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
						<Card.Title id='plant-title'>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Button
							onClick={() => AddToGarden(id)}
							style={{
								backgroundColor: '#1cab7c',
								border: 'none',
							}}
						>
							Add to Garden
						</Button>
					</Card.Body>
					<small className='text-muted' style={{ fontSize: '12px' }}>
						Last updated 3 mins ago
					</small>
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
