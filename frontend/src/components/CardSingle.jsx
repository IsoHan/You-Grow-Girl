import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
// import image from '../images/plants/zebra_plant.png';
import { useImage } from 'react-image';
import CardColumns from 'react-bootstrap/CardColumns';
import '../App.css';
import Col from 'react-bootstrap/Col';

const CardSingle = ({ title, description, image }) => {
	function MyImageComponent() {
		const { src } = useImage({
			srcList: '../images/plants/zebra_plant.png',
		});

		return <img src={src} alt={''} />;
	}

	return (
		<Col lg={4} md={6} sm={12} style={{ marginTop: '30px' }}>
			<Card
				className='text-center'
				style={{
					padding: '30px',
					border: '1px solid #fececf',
					borderRadius: '30px',
				}}
			>
				<Card.Img variant='top' src={image} />
				<Card.Body>
					<Card.Title style={{ color: '#437e85', fontSize: '35px' }}>
						{title}
					</Card.Title>
					<Card.Text style={{ color: '#525252' }}>{description}</Card.Text>
					<Button style={{ backgroundColor: '#ffcecf', border: 'none' }}>
						More info
					</Button>
				</Card.Body>
				<small className='text-muted'>Last updated 3 mins ago</small>
				{/* <Card.Footer>
					<small className='text-muted'>Last updated 3 mins ago</small>
				</Card.Footer> */}
			</Card>
		</Col>
	);
};

CardSingle.defaultProps = {
	title: 'Default Title',
	description:
		'A tropical plant originally from Brazil. Typically grown indoors, its lauded for its unique dark leaves that are striped with white veins, as well as its colorful flowers.',
	imageName: 'zebra_plant.png',
};

CardSingle.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageName: PropTypes.string,
};

export default CardSingle;
