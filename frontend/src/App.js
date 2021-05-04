import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AllPlants from "./components/AllPlants";
import Search from "./components/Search";
//import CardsGrid from "./components/Cards";
import SignIn from "./components/LoginForm";
import Register from "./components/RegisterForm";
import YourGarden from "./components/YourGarden";

function App() {
	// test fake login details
	const adminUser = {
		username: "admin",
		password: "admin",
	};

	const [user, setUser] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);

		if (
			details.username === adminUser.username &&
			details.password === adminUser.password
		) {
			console.log("Logged in");
			setUser({
				username: details.username,
				password: details.password,
			});
		} else {
			setError("Details do not match!");
		}
	};

	const Logout = () => {
		setUser({ username: "", password: "" });
	};

	return (
		<div className="App">
			{user.username !== "" ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.username}</span>
					</h2>
					<button onClick={Logout}>Logout</button>
				</div>
			) : (
				<Router>
					<Navbar />
					<Route path="/yourgarden" component= {YourGarden}/>
					<Route path="/allplants" component={AllPlants} />
					<Route path="/signin">
						<SignIn Login={Login} error={error} />
					</Route>
					<Route path="/register" component={Register} />
					<Route path="/search" component={Search} />
					<Route path="/" exact component={Homepage} />
					<Footer />
				</Router>
			)}
		</div>
	);
}

export default App;
