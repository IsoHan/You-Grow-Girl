import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AllPlants from "./components/AllPlants";
import Search from "./components/Search";

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/allplants" component={AllPlants} />
			<Route path="/search" component={Search} />
			<Route path="/yourgarden" />
			<Route path="/" exact component={Homepage} />
			<Footer />
		</Router>
	);
}

export default App;
