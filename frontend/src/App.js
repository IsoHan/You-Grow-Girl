import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AllPlants from "./components/AllPlants";
import Search from "./components/Search";

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact>
				<Homepage />
			</Route>
			<Route path="/allplants">
				<AllPlants />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Footer />
		</Router>
	);
}

export default App;
