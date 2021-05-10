import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
// import image from '../images/plants/zebra_plant.png';
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import axiosInstance from "./axiosFetch";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import React from "react";

const CardSingle = ({ id, title, description, image, loggedIn }) => {
	var plantURL = `/plantinfo/${id}`;
	const AddToGarden = async (id) => {
		var data = { plant: `${id}` };

		axiosInstance.post("gardens/gardenplants/", data);
	};

	const handleAddToGarden = () => {
		store.addNotification({
			title: "Planted!",
			message: `${title} has been planted in Your Garden!`,
			type: "success",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
	};

	const handleSignInRedirect = () => {
		store.addNotification({
			title: "Sign In",
			message: `You must be signed in to add a ${title} to Your Garden.`,
			type: "info",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
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
							{loggedIn ? (
								<Button
									onClick={() => {
										AddToGarden(id);
										handleAddToGarden();
									}}
									style={{
										backgroundColor: "#1cab7c",
										border: "none",
									}}
								>
									Add to Garden
								</Button>
							) : (
								<Button
									onClick={() => {
										handleSignInRedirect();
									}}
									style={{
										backgroundColor: "#1cab7c",
										border: "none",
									}}
								>
									Add to Garden
								</Button>
							)}
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Col>
	);
};

CardSingle.defaultProps = {
	title: "Default Title",
	description:
		"A tropical plant originally from Brazil. Typically grown indoors, its lauded for its unique dark leaves that are striped with white veins, as well as its colorful flowers.",
	imageName: "zebra_plant.png",
};

CardSingle.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageName: PropTypes.string,
};

export default CardSingle;
