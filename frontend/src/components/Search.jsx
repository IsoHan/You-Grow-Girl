import {useState} from 'react'

const Search = ({onSearch}) => {
	const [searchQuery, setSearchQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onSearch({ searchQuery })
        setSearchQuery('')
    }	

	return (
		<div>
			<form id='search-form' onSubmit={onSubmit}>
				<div id='form-control'>
					<input id='search-bar' type="text" placeholder='Search for a plant...' value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} />
					<button id='searchButton' type="submit" value='Search Plants'>Search</button>
				</div>
				
			</form>
		</div>
	);
};

export default Search;
