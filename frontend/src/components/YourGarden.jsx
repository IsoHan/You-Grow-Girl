import axios from "axios";
import { useState, useEffect } from "react";
import CardSingle from "./CardSingle";
//import axiosInstance from "./axiosFetch";

const YourGarden = () => {
	const [data, setData] = useState([]);
	const [mounted, setMounted] = useState(false);
	const getData = async () => {
		const res = await axios.get(
			`http://127.0.0.1:8000/api/gardens/gardenplants/`,
			{
				headers: {
					Authorization: "JWT " + localStorage.getItem("access_token"),
				},
			}
		);

		const data = res.data;
		console.log(data);
		const postData = data.map((pd) => (
			<div key={pd.id}>
				<CardSingle
					title={pd.plant.common_name}
					description={pd.plant.description}
					image={pd.plant.image}
				/>
			</div>
		));
		setData(postData);
	};
	useEffect(() => {
		if (mounted === false) {
			getData();
			setMounted(true);
		}
	}, [mounted]);
	return (
		<div>
			<div className="cards">{data}</div>
		</div>
	);
};

export default YourGarden;
