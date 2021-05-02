import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AllPlants from "./components/AllPlants";
import Search from "./components/Search";
import CardsGrid from "./components/Cards";

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/yourgarden" />
			<Route path="/allplants" component={CardsGrid} />
			<Route path="/search" component={Search} />
			<Route path="/" exact component={Homepage} />
			<Footer />
		</Router>
	);
}

export default App;
