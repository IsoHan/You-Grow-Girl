import {useState} from 'react'

const Search = ({onSearch}) => {
	const [searchQuery, setSearchQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!searchQuery) {
          alert('Please search something')
          return
        }

        onSearch({ searchQuery })
        setSearchQuery('')
    }	

	return (
		<div>
			<h1>Search for a plant</h1>
			<form className='search-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<input className='search-bar' type="text" placeholder='Search for a plant...' value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} />
				</div>
				<button className='searchButton' type="submit" value='Search Plants'>Search</button>
			</form>
		</div>
	);
};

export default Search;
