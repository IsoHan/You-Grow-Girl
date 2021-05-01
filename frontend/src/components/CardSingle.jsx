import { Card, Button } from 'react-bootstrap';
// import ZebraPlant from '../images/plants/zebra_plant';
import logo from '../images/plants/zebra_plant.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardSingle = () => {
	return (
		<div>
			<Card
				style={{
					width: '18rem',
					border: '#ffcecf solid 1px',
					borderRadius: '30px',
					padding: '20px 30px',
				}}
			>
				<Card.Img variant='top' src={logo} />
				<Card.Body>
					<Card.Title style={{ color: '#437e85', fontSize: '35px' }}>
						Zebra Plant
					</Card.Title>
					<Card.Text style={{ color: '#525252' }}>
						A tropical plant originally from Brazil. Typically grown indoors,
						it's lauded for its unique dark leaves that are striped with white
						veins, as well as its colorful flowers.
					</Card.Text>
					<Button style={{ backgroundColor: '#ffcecf', border: 'none' }}>
						More info
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardSingle;
