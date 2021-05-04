import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../App.css';
import CardSingle from './CardSingle';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AllPlants() {
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [perPage] = useState(9);
	const [pageCount, setPageCount] = useState(0);

	const getData = async (searchQuery) => {
		const res = await axios.get(`http://127.0.0.1:8000/api/plants/`);
		const data = res.data;
		if (!searchQuery){
			const slice = data.slice(offset * perPage, offset * perPage + perPage);
			const postData = slice.map((pd) => (
				<CardSingle
					title={pd.common_name}
					description={pd.description}
					image={pd.image}
				/>
			));
			setData(postData);
			setPageCount(Math.ceil(data.length / perPage));
		}
		else {
				const searchResult=searchQuery.searchQuery
				const searchData = data.filter((pd) => (
						pd.common_name.toLowerCase().includes(searchResult.toLowerCase())
				  )).map((pd) => (
					<CardSingle
						title={pd.common_name}
						description={pd.description}
						image={pd.image}
					/>));
				setData(searchData);
				setPageCount(Math.ceil(data.length / perPage));
		}
	};
	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage);
	};

	useEffect(() => {
		getData();
	}, [offset]);

	console.log({ data });

	return (
		<Container>
			<Row>{data}</Row>
			<Search onSearch={getData} />
			<div className='pagination-container'>
				<ReactPaginate
					previousLabel={'prev'}
					nextLabel={'next'}
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

export default AllPlants;
