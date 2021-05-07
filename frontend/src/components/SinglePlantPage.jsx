import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import CardSingleDetailed from "./CardSingleDetailed";

const SinglePlantPage = (props) => {
	let id = props.match.params.id;
	const [info, setInfo] = useState({});
	const [mounted, setMounted] = useState(false);

	const getplant = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/api/plants/${id}/`);
		setMounted(true);
		var data2 = res.data;

		// Convert moisture qualitative to quantitative
		var no;
		if (data2.moisture === "Low") {
			no = 14;
		} else if (data2.moisture === "Low to medium") {
			no = 11;
		} else if (data2.moisture === "Medium") {
			no = 7;
		} else if (data2.moisture === "Medium to high") {
			no = 4;
		} else if (data2.moisture === "High") {
			no = 2;
		}
		data2.moisture = `Water every ${no} days`;

		// Toxicity to dogs
		var toxicToDogs;
		data2.toxic_to_dogs ? (toxicToDogs = "Yes") : (toxicToDogs = "No");
		data2.toxic_to_dogs = toxicToDogs;

		// Toxicity to cats
		var toxicToCats;
		data2.toxic_to_cats ? (toxicToCats = "Yes") : (toxicToCats = "No");
		data2.toxic_to_cats = toxicToCats;

		console.log(data2);
		setInfo(data2);
	};

	useEffect(() => {
		if (mounted === false) {
			getplant();
		}
	});
	return (
		<div>
			<Container style={{ marginBottom: "70px" }}>
				<CardSingleDetailed
					id={info.id}
					title={info.common_name}
					description={info.description}
					image={info.image}
					sunlight={info.sunlight}
					moisture={info.moisture}
					bloom_period={info.bloom_period}
					ph_soil={info.ph_soil}
					toxic_to_dogs={info.toxic_to_dogs}
					toxic_to_cats={info.toxic_to_cats}
					plant_habit={info.plant_habit}
					loggedIn={props.loggedIn}
				/>
			</Container>
		</div>
	);
};

export default SinglePlantPage;
