import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import homepageimage from "../images/homepageimage.png";
import search from "../images/search.png";
import planticon2 from "../images/planticon2.png";
import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant3.png";
import HomeCard from "./HomeCard";
import CarouselComp from './CarouselComp';

const Homepage = () => {
	const [data, setData] = useState([]);
	
	const getData = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/api/plants/`);
		const data2 = res.data;
		console.log(data2)
		const weeklyPlants = data2.filter((pd) => (
			pd.id === 11 || pd.id === 31 || pd.id === 25 ))
		const postData = weeklyPlants.map((pd) => (
			<CarouselComp
				title={pd.common_name}
				description={pd.description}
				image={pd.image}
				id={pd.id}
			/>
		));
		setData(postData);
	}
	
	useEffect(() => {
		getData();	
	}, []);
	
	return (
		<div className="font-link">
			<Container>
				<Row>
					<Col
						md={{ span: 6, order: 1 }}
						xs={{ span: 12, order: 12 }}
						className="homepage-top"
					>
						<div>
							<h2 className="page-title">
								<b>Plants made easy</b>
							</h2>
							<br />
							<p style={{ fontSize: "20px" }}>
								You Grow Girl helps you get the best for your planty friend
							</p>
							<p>
								Here at You Grow Girl we help you care for your plants in the best possible way. <br/>
								Find information about the plants that will suit you best, and how to grow them to be healthy, tall, and strong. <br/>
								Discover Your Garden to save your plants and keep all of your information in one convenient place.
							</p>
							<NavLink to="/signin">
								<Button
									style={{ backgroundColor: "#1cab7c", borderColor: "#1cab7c" }}
								>
									Sign In
								</Button>
							</NavLink>
						</div>
					</Col>
					<Col md={{ span: 6, order: 12 }} xs={{ span: 12, order: 1 }}>
						<Image src={homepageimage} alt="Assorted plants" fluid />
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={6} xs={12} className="home-icons">
						<Image
							src={search}
							alt="Search icon"
							style={{ height: "150px" }}
							fluid
						/>
						<p>Search our database for your plant</p>
						<h6 className="font-two">
							Get instructions on how to care for your plant
						</h6>
					</Col>
					<Col md={6} xs={12} className="home-icons">
						<Image
							src={planticon2}
							alt="Search icon"
							style={{ height: "150px" }}
							fluid
						/>
						<p>Add plants to your garden</p>
						<h6 className="font-two">
							For regular access and watering reminders
						</h6>
					</Col>
				</Row>
				<br />
				<Row>
					<Carousel indicators={false} nextIcon={false} prevIcon={false} pause={'hover'} interval={3000} fade={true}>
						<Carousel.Item>
							{data[0]}
						</Carousel.Item>
						<Carousel.Item>
							{data[1]}
						</Carousel.Item>
						<Carousel.Item>
							{data[2]}
						</Carousel.Item>
					</Carousel>
				</Row>
				<br />
				<Row>
					<Col lg={4} md={6} sm={12} >
						<HomeCard 
						text="Learn to grow your plants from a seed in the best conditions for them" 
						image={plant1} fluid />
					</Col>
					<Col lg={4} md={6} sm={12} >
						<HomeCard 
						text="Care for your plants with proper sunlight conditions, water schedule, and know when they'll bloom" 
						image={plant2} fluid />
					</Col>
					<Col lg={4} md={6} sm={12} >
						<HomeCard 
						text="Reap the rewards of your gorgeous, healthy plants!" 
						image={plant3} fluid />
					</Col>
				</Row>
			</Container>
			<br />
		</div>
	);
};

export default Homepage;
