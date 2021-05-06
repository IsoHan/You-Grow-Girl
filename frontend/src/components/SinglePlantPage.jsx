import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import CardSingleDetailed from './CardSingleDetailed';

const SinglePlantPage = (props) => {
	let id = props.match.params.id;
	const [info, setInfo] = useState({});
	const [mounted, setMounted] = useState(false);

	const getplant = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/api/plants/${id}/`);
		setMounted(true);
		const data2 = res.data;
		setInfo(data2);
	};

	useEffect(() => {
		if (mounted === false) {
			getplant();
		}
	});
	return (
		<div>
			<Container style={{ marginBottom: '30px' }}>
				<CardSingleDetailed
					id={info.id}
					title={info.common_name}
					description={info.description}
					image={info.image}
					sunlight={info.sunlight}
					moisture={info.moisture}
					bloom_period={info.bloom_period}
					ph_soil={info.ph_soil}
					plant_habit={info.plant_habit}
				/>
			</Container>
		</div>
	);
};

export default SinglePlantPage;
