import { Card, Button } from 'react-bootstrap';
// import ZebraPlant from '../images/plants/zebra_plant';
import logo from '../images/plants/zebra_plant.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardSingle = () => {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={logo} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardSingle;
