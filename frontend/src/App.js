import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import AllPlants from './components/AllPlants';
//import Search from "./components/Search";
//import CardsGrid from "./components/Cards";
import SignIn from './components/LoginForm';
import SignUp from './components/RegisterForm';
import YourGarden from './components/YourGarden';
import SinglePlantPage from './components/SinglePlantPage';
import Logout from './components/Logout';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	// Sets loggedIn state when page is loaded or refreshed
	useEffect(() => {
		const token = localStorage.getItem('access_token');
		if (token) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, []);

	const handleLogin = () => {
		setLoggedIn(true);
	};

	const handleLogout = () => {
		setLoggedIn(false);
	};

	return (
		<div className='App'>
			<Router>
				<Navbar loggedIn={loggedIn} />
				<Route path='/yourgarden' component={YourGarden} />
				<Route path='/allplants'>
					<AllPlants loggedIn={loggedIn} />
				</Route>
				<Route path='/logout'>
					<Logout handleLogout={handleLogout} />
				</Route>
				<Route path='/signin'>
					<SignIn handleLogin={handleLogin} />
				</Route>
				<Route path='/register' component={SignUp} />
				<Route path='/' exact component={Homepage} />
				<Route
					path='/plantinfo/:id'
					render={(props) => <SinglePlantPage {...props} loggedIn={loggedIn} />}
				/>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
