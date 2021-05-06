import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../App.css';
import GardenPlantCard from './GardenPlantCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

function YourGarden() {
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [perPage] = useState(3);
	const [pageCount, setPageCount] = useState(0);

	const getData = async () => {
		const res = await axios.get(
			`http://127.0.0.1:8000/api/gardens/gardenplants/`,
			{
				headers: {
					Authorization: 'JWT ' + localStorage.getItem('access_token'),
				},
			}
		);
		const data = res.data;
		const slice = data.slice(offset * perPage, offset * perPage + perPage);

		if (slice.length===0){
			const noPlants = <p>You don't currently have any plants growing in you garden. Please look through our 
				plant collection to add plants to your garden. 
			</p>
			setData(noPlants)
		}else{
		const postData = slice.map((pd,index) => (
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
		setPageCount(Math.ceil(data.length / perPage));}
	};

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage);
	};

	const handleDeletion = () => {
		getData();
	};

	useEffect(() => {
		getData();
	}, [offset]); // getData() called every time 'offset' changes

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
		<Container>
			<Row>{data}</Row>
			<div className='pagination-container'>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={pageCount}
					marginPagesDisplayed={3}
					pageRangeDisplayed={2}
					onPageChange={handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
			</div>

		</Container>
	);
}

export default YourGarden;
