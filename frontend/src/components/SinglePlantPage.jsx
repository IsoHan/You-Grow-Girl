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
			<Container>
				<CardSingleDetailed
					id={info.id}
					title={info.common_name}
					description={info.description}
					image={info.image}
				/>
			</Container>
			<h2> Facts and care:</h2>
			<ul>
				<li>{info.sunlight} </li>
				<li>moisture: {info.moisture}</li>
				<li>type: {info.plant_habit}</li>
				<li> bloom time: {info.bloom_period} </li>
				<li>soil ph: {info.ph_soil} </li>
			</ul>
		</div>
	);
};

export default SinglePlantPage;
