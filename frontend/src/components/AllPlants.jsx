import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../App.css';
import CardSingle from './CardSingle';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import forwardarrow from "../images/forwardarrow.png";
import backarrow from "../images/backarrow.png";

function AllPlants() {
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [allData, setAllData] = useState([]);
	const [perPage] = useState(9);
	const [pageCount, setPageCount] = useState(0);

	const getData = async (searchQuery) => {
		const res = await axios.get(`http://127.0.0.1:8000/api/plants/`);
		const data2 = res.data;
		var searched
		if (!searchQuery && (allData.length === 38 || allData.length === 0) ) {
			setAllData(data2);
			normalSlice(data2);
			setPageCount(Math.ceil(data2.length / perPage));
		}
		else if (!searchQuery) {
			normalSlice(allData);
			setPageCount(Math.ceil(allData.length / perPage));
		}
		else if (searchQuery==='other'){
			setAllData(data2);
			normalSlice(data2);
			setPageCount(Math.ceil(data2.length / perPage));
		}
		else if (searchQuery && offset!==0){
			const searchResult=searchQuery.searchQuery
			const searchData = data2.filter((pd) => (
				pd.common_name.toLowerCase().includes(searchResult.toLowerCase()) ))
			setPageCount(Math.ceil(searchData.length / perPage));
			setAllData(searchData);
			setOffset(0);
		}
		else {
			const searchResult=searchQuery.searchQuery
			const searchData = data2.filter((pd) => (
				pd.common_name.toLowerCase().includes(searchResult.toLowerCase()) ))
			setPageCount(Math.ceil(searchData.length / perPage));
			setAllData(searchData);
			normalSlice(searchData);
		}
		}
	
	const normalSlice = async (datal) => {
		const slice = datal.slice(offset * perPage, offset * perPage + perPage);
		const postData = slice.map((pd,index) => (
			<CardSingle
				key={index}
				id= {pd.id}
				title={pd.common_name}
				description={pd.description}
				image={pd.image}
			/>
		));
		setData(postData);		
	}
	
	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage);
	};
	
	const onRestore = () => {
		getData('other');
	}

	useEffect(() => {
		getData()
	}, [offset]);

	return (
		<div className="font-link">
		<Search onSearch={getData} onRestore={onRestore} searched={allData.length!==38 ? true : false}/>
		<Container>
			<Row>{data}</Row>
			<div className='pagination-container'>
				<ReactPaginate
					previousLabel={<Image src={backarrow} style={{width:'15px', top:'50%', position:'absolute', left: '50%',
					transform: 'translate(-50%, -50%)'}} />}
					nextLabel={<Image src={forwardarrow} style={{width:'15px', top:'50%', position:'absolute', left: '50%',
					transform: 'translate(-50%, -50%)'}} />}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={pageCount}
					marginPagesDisplayed={3}
					pageRangeDisplayed={2}
					onPageChange={handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
					forcePage={offset}
				/>
			</div>
		</Container>
		</div>
	);
}

export default AllPlants;
