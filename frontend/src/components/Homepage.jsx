import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";
import homepageimage from "../images/homepageimage.png";
import search from '../images/search.png';
import planticon2 from "../images/planticon2.png";
import homeplant from "../images/homeplant.png";
import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant3.png";
import HomeCard from './HomeCard';

const Homepage = () => {
	return (
		<div className='font-link'>
			<Container>
				<Row>
					<Col md={{ span: 6, order: 1}} xs={{ span:12, order:12}} className='homepage-top'>
						<div>
							<h2 className='home-title'><b>Plants made easy</b></h2>
							<br/>
							<p style={{fontWeight:'200', fontSize:'20px' }}>You Grow Girl helps you get the best for your planty friend</p>
							<NavLink to='/'>
								<Button style={{backgroundColor:'#1cab7c', borderColor: '#1cab7c'}}>
									Sign In
								</Button>
							</NavLink>	
						</div>
					</Col>
					<Col md={{ span:6, order: 12}} xs={{ span: 12, order:1}}>
						<Image src={homepageimage} alt='Assorted plants' fluid/>
					</Col>
				</Row>
				<br/>
				<Row>
					<Col md={6} xs={12} className="home-icons">
						<Image src = {search} alt='Search icon' style={{height:'150px'}} fluid />
						<h5>Search our database for your plant</h5>
						<h6 className='font-two'>Get instructions on how to care for your plant</h6>
					</Col>
					<Col md={6} xs={12} className="home-icons">
						<Image src = {planticon2} alt='Search icon' style={{height: '150px'}} fluid />
						<h5>Add plants to your garden</h5>
						<h6 className='font-two'>For regular access and watering reminders</h6>
					</Col>
				</Row>
				<br/>
				<Row>
				<Carousel>
					<Carousel.Item>
						<Container>
							<Row>
								<Col md={6} xs={12} >
								<Image
								className='w-100'
								src={homeplant}
								alt="First slide"
								/>
								</Col>
								<Col md={6} xs={12} className=" w-100 plant-week homepage-top">
									<h3>Plants of the Week</h3>
									<p></p>
									<h2>Cheese Plant</h2>
									<p></p>
									<h5>With huge, glossy, dark green leaves, Monstera deliciosa, also known by its common name “Swiss cheese plant,” is a striking addition to any room.
									</h5>
								</Col>
							</Row>
						</Container>		
					</Carousel.Item>
					<Carousel.Item>
						<Container>
							<Row>
								<Col md={6} xs={12} className='thirty'>
								<Image
								className='w-100'
								src={homeplant}
								alt="First slide"
								/>
								</Col>
								<Col md={6} xs={12} className="w-100 plant-week homepage-top">
									<h3>Plants of the Week</h3>
									<p></p>
									<h2>Cheese Plant</h2>
									<p></p>
									<h5>With huge, glossy, dark green leaves, Monstera deliciosa, also known by its common name “Swiss cheese plant,” is a striking addition to any room.
									</h5>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
					<Carousel.Item>
						<Container>
							<Row>
								<Col md={6} xs={12}>
								<Image
								className='w-100'
								src={homeplant}
								alt="First slide"
								/> 
								</Col>
								<Col md={6} xs={12} className=" w-100 plant-week homepage-top">
									<h3>Plants of the Week</h3>
									<p></p>
									<h2>Cheese Plant</h2>
									<p></p>
									<h5>With huge, glossy, dark green leaves, Monstera deliciosa, also known by its common name “Swiss cheese plant,” is a striking addition to any room.
									</h5>
								</Col>
								</Row>
							</Container>
					</Carousel.Item>
					</Carousel>
				</Row>
				<br/>
				<Row  >
					<Col md={4} sm={6} xs={12}>
					<HomeCard text='SAVE PLANTS' image={plant1} fluid/>
					</Col>
					<Col md={4} sm={6} xs={12}>
					<HomeCard text='+ TLC' image={plant2} fluid/>
					</Col>
					<Col md={4} sm={6} xs={12}>
					<HomeCard text='= PROFIT' image={plant3} fluid />
					</Col>
				</Row>
			</Container>
			<br/>
		</div>
	);
};

export default Homepage;

