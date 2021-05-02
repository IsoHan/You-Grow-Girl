import logo from "../images/logo.png";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
	return (
		<div>
			<AppBar position="static" style={{ backgroundColor: "white" }}>
				<Toolbar>
					<NavLink exact={true} to="/">
						<img src={logo} alt={""} className="logo" />
					</NavLink>
					&nbsp;&nbsp;&nbsp;
					<NavLink exact={true} to="/">
						<Typography
							variant="h6"
							style={{ color: "black", textDecoration: "none" }}
							className="title"
						>
							You Grow Girl!
						</Typography>
					</NavLink>
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
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
