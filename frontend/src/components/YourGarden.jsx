import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../App.css";
import GardenPlantCard from "./GardenPlantCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import plants from "../images/threeplants.png";

function YourGarden() {
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [perPage] = useState(3);
	const [pageCount, setPageCount] = useState(0);
	const [showImage, setShowImage] = useState(true);

	const getData = useCallback(async () => {
		const res = await axios.get(
			`http://127.0.0.1:8000/api/gardens/gardenplants/`,
			{
				headers: {
					Authorization: "JWT " + localStorage.getItem("access_token"),
				},
			}
		);
		const data = res.data;
		const slice = data.slice(offset * perPage, offset * perPage + perPage);
		const handleDeletion = () => {
			getData();
		};

		if (slice.length === 0) {
			const noPlants = (
				<Col>
					You don't currently have any plants growing in your garden! Please
					look through our plant collection to add plants to your garden.
				</Col>
			);
			setData(noPlants);
			setShowImage(true);
		} else {
			const postData = slice.map((pd, index) => (
				<GardenPlantCard
					key={index}
					id={pd.id}
					plant_id={pd.plant.id}
					title={pd.plant.common_name}
					description={pd.plant.description}
					image={pd.plant.image}
					handleDeletion={handleDeletion}
				/>
			));
			setData(postData);
			setShowImage(false);
			setPageCount(Math.ceil(data.length / perPage));
		}
	}, [offset, perPage]);

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage);
	};

	useEffect(() => {
		getData();
	}, [offset, getData]); // getData() called every time 'offset' changes

	let active = 2;
	let items = [];
	for (let number = 1; number < 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		);
	}

	return (
		<div>
			<Container style={{ textAlign: "center" }}>
				<h2
					className="page-title text-center"
					style={{ marginTop: "20px", marginBottom: "15px" }}
				>
					Your Garden
				</h2>
				<Row>{data}</Row>
				<div className="pagination-container">
					<ReactPaginate
						previousLabel={"<"}
						nextLabel={">"}
						breakLabel={"..."}
						breakClassName={"break-me"}
						pageCount={pageCount}
						marginPagesDisplayed={3}
						pageRangeDisplayed={2}
						onPageChange={handlePageClick}
						containerClassName={"pagination"}
						subContainerClassName={"pages pagination"}
						activeClassName={"active"}
					/>
				</div>
			</Container>
			{showImage && <img src={plants} alt={""} className="threeplants" />}
		</div>
	);
}

export default YourGarden;
