import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSingle from './CardSingle';

function AllPlants(props) {
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		async function getPlants() {
			const result = await axios('http://127.0.0.1:8000/api/plants/');
			setPlants(result.data);
		}

		getPlants();
	}, []);

	return (
		<div>
			<CardSingle />
			<ul>
				{plants.map((plant) => (
					<li key={plant.id}>{plant.common_name}</li>
				))}
			</ul>
		</div>
	);
}

export default AllPlants;
