import { useState } from "react";
import React from "react";

const Search = ({ onSearch, onRestore, searched }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		onSearch({ searchQuery });
		setSearchQuery("");
	};

	return (
		<div>
			<form id="search-form" onSubmit={onSubmit}>
				<div id="form-control">
					<input
						id="search-bar"
						type="text"
						placeholder="Search for a plant..."
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Search for a plant...")}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button id="searchButton" type="submit" value="Search Plants">
						Search
					</button>
					{searched && (
						<button onClick={onRestore} id="restore" style={{ width: "150px" }}>
							See All Plants
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default Search;
