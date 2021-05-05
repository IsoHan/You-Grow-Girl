import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

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
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route path='/yourgarden' component={YourGarden} />
				<Route path='/allplants' component={AllPlants} />
				<Route path='/logout'>
					<SignIn Logout={Logout} />
				</Route>
				<Route path='/signin'>
					<SignIn Login={SignIn} />
				</Route>
				<Route path='/register' component={SignUp} />
				<Route path='/' exact component={Homepage} />
				<Route path='/plantinfo/:id' component={SinglePlantPage} />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
