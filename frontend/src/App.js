import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
//import AllPlants from "./components/AllPlants";
import Search from "./components/Search";
import CardsGrid from "./components/Cards";
import SignIn from "./components/LoginForm";

function App() {
	const adminUser = {
		email: "admin@admin.com",
		password: "admin123",
	};

	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);

		if (
			details.email === adminUser.email &&
			details.password === adminUser.password
		) {
			console.log("Logged in");
			setUser({
				name: details.name,
				email: details.email,
			});
		} else {
			console.log("Details do not match!");
		}
	};

	const Logout = () => {
		setUser({ name: "", email: "" });
	};

	return (
		<div className="App">
			{user.email != "" ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.name}</span>
					</h2>
					<button onClick={Logout}>Logout</button>
				</div>
			) : (
				<Router>
					<Navbar />
					<Route path="/yourgarden" />
					<Route path="/allplants" component={CardsGrid} />
					<Route path="/signin">
						<SignIn Login={Login} error={error} />
					</Route>
					<Route path="/search" component={Search} />
					<Route path="/" exact component={Homepage} />
					<Footer />
				</Router>
			)}
		</div>
	);
}

export default App;
