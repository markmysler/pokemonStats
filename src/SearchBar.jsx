function SearchBar({ setSearch }) {
	return (
		<>
			<input
				className="searchBar"
				type="text"
				placeholder="Search..."
				onChange={(e) => setSearch(e.target.value)}
			/>
		</>
	);
}

export default SearchBar;
