import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
// import image from '../images/plants/zebra_plant.png';
import { useImage } from "react-image";
import CardColumns from "react-bootstrap/CardColumns";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "./axiosFetch";

const GardenPlantCard = ({ id, title, description, image }) => {
	var plantURL = `/plantinfo/${id}`;
	function MyImageComponent() {
		const { src } = useImage({
			srcList: "../images/plants/zebra_plant.png",
		});

		return <img src={src} alt={""} />;
	}

	const AddToGarden = async (id) => {
		var data = { plant: `${id}` };
		/* 		const res = await axios.post(`http://127.0.0.1:8000/gardens/api/gardenplants/`,data, {
				headers: {
					'Authorization':  "JWT " + localStorage.getItem("access_token")
					
			}
		}
			); */
		axiosInstance.post("gardens/gardenplants/", data);
	};

	return (
		<Col lg={4} md={6} sm={12} style={{ marginTop: "30px" }}>
			<Card
				className="text-center"
				style={{
					padding: "30px",
					border: "1px solid #fececf",
					borderRadius: "30px",
				}}
			>
				<Card.Img variant="top" src={image} style={{ height: "300px" }} />
				<Card.Body>
					<Card.Title id="plant-title" style={{ height: "65px" }}>
						<p>{title}</p>
					</Card.Title>
					<Card.Text style={{ height: "200px" }}>{description}</Card.Text>
					<Row
						className="align-items-center"
						style={{ margin: "0px", padding: "0px" }}
					>
						<Col lg={5} style={{ margin: "0px", padding: "0px" }}>
							<Link to={plantURL}>
								<Button
									style={{
										backgroundColor: "#ffcecf",
										border: "none",
									}}
								>
									More info
								</Button>
							</Link>
						</Col>
						<Col lg={7} style={{ margin: "0px", padding: "0px" }}>
							<Button
								onClick={() => AddToGarden(id)}
								style={{
									backgroundColor: "#1cab7c",
									border: "none",
								}}
							>
								Add to Garden
							</Button>
						</Col>
					</Row>
				</Card.Body>
				<small className="text-muted" style={{ fontSize: "12px" }}>
					Last updated 3 mins ago
				</small>
				{/* <Card.Footer>
					<small className='text-muted'>Last updated 3 mins ago</small>
				</Card.Footer> */}
			</Card>
		</Col>
	);
};

GardenPlantCard.defaultProps = {
	title: "Default Title",
	description:
		"A tropical plant originally from Brazil. Typically grown indoors, its lauded for its unique dark leaves that are striped with white veins, as well as its colorful flowers.",
	imageName: "zebra_plant.png",
};

GardenPlantCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageName: PropTypes.string,
};

export default GardenPlantCard;