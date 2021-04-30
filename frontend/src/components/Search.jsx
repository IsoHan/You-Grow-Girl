import { Navbar } from 'react-bootstrap';

const Search = () => {
	return (
		<div>
			<h1>Search for a plant</h1>

			<Navbar>
				<Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>
						Signed in as: <a href='#login'>Mark Otto</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Search;
