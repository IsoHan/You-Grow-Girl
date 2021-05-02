import AllPlants from "./AllPlants";
import { Container, Row, Col } from "react-grid-system";

const CardsGrid = () => {
	return (
		<div>
			<Container>
				<AllPlants />
			</Container>
		</div>
	);
};

export default CardsGrid;
