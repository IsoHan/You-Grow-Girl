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
			<ul>
				{plants.map((plant) => (
					<CardSingle
						title={plant.common_name}
						description={plant.description}
					/>
				))}
			</ul>
		</div>
	);
}

export default AllPlants;
