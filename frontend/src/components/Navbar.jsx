import logo from "../images/logo3.png";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import Avatar from "react-avatar";

const useStyles = makeStyles({
	header: {
		backgroundColor: "white",
		boxShadow: "0px 0px 0px 0px",
		fontFamily: "IBM Plex Sans",
	},
});

const handleGardenRedirect = () => {
	// alert('You must be signed in to see your garden.');

	store.addNotification({
		title: "Sign In",
		message: "Please sign in to see Your Garden.",
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

function Navbar({ loggedIn, loggedInUser }) {
	const classes = useStyles();
	console.log(localStorage.getItem("access_token"));

	return (
		<div>
			<ReactNotification />
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<Container>
						<Row>
							<Col className="links titles">
								<NavLink exact={true} to="/">
									<img src={logo} alt={""} className="logo" />
								</NavLink>
								&nbsp;&nbsp;&nbsp;
								<NavLink exact={true} to="/" style={{ textDecoration: "none" }}>
									<Typography
										variant="h6"
										style={{
											textDecoration: "none",
											fontFamily: "Montserrat",
											fontWeight: "bold",
											color: "#1cab7c",
											textTransform: "uppercase",
											fontSize: "50px",
											lineHeight: "116.19%",
										}}
										className="title"
									>
										You Grow Girl
									</Typography>
								</NavLink>
							</Col>
							<Col className="links navs">
								<NavLink exact={true} to="/">
									<Button text="Home" />
								</NavLink>
								<NavLink exact={true} to="/allplants">
									<Button text="All Plants" />
								</NavLink>
								{loggedIn ? (
									<NavLink exact={true} to="/yourgarden">
										<Button text="Your Garden" />
									</NavLink>
								) : (
									<NavLink
										exact={true}
										to="/signin"
										onClick={handleGardenRedirect}
									>
										<Button text="Your Garden" />
									</NavLink>
								)}
								{loggedIn ? (
									<NavLink exact={true} to="/logout">
										<Button text="Sign Out" />
									</NavLink>
								) : (
									<NavLink exact={true} to="/signin">
										<Button text="Sign In" />
									</NavLink>
								)}
							</Col>
							{loggedIn && (
								<Avatar
									name={loggedInUser}
									round={true}
									size={50}
									color="#fececf"
								/>
							)}
						</Row>
					</Container>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
