import logo from "../images/logo3.png";
import Button from "./Button";
import { NavLink} from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles({
	header: {
		backgroundColor: "white", 
		boxShadow:'0px 0px 0px 0px', 
		fontFamily:'IBM Plex Sans'
	}
})

function Navbar() {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<Container>
						<Row>
						<Col className='links titles'>
							<NavLink exact={true} to="/">
								<img src={logo} alt={""} className="logo" />
							</NavLink>
							&nbsp;&nbsp;&nbsp;
							<NavLink exact={true} to="/" style={{ textDecoration: "none" }}>
								<Typography
									variant="h6"
									style={{ textDecoration: "none",
									fontFamily: 'Montserrat',
									fontWeight:'bold',
									color:'#1cab7c',
									textTransform: 'uppercase',
									fontSize: '50px',
									lineHeight: '116.19%',
									}}
									className="title"
								>
									You Grow Girl
								</Typography>
							</NavLink>
						</Col>
						<Col className='links navs'>
							<NavLink exact={true} to="/">
								<Button text="Home" />
							</NavLink>
							<NavLink exact={true} to="/allplants">
								<Button text="All Plants" />
							</NavLink>
							<NavLink exact={true} to="/yourgarden">
								<Button text="Your Garden" />
							</NavLink>
							<NavLink exact={true} to="/signin">
								<Button text="Sign In" />
							</NavLink>
						</Col>
						</Row>
					</Container>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
